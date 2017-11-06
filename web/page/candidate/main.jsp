<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/26
  Time: 16:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href=" <%=basePath%>">
    <title>主页</title>
    <script src="js/jquery-3.0.0.js"></script>
    <link rel="stylesheet" href="css/mystyle.css" type="text/css" charset="UTF-8">
    <style>
        #left_win {
            border: 1px black solid;
            padding: 10px 5px 5px 10px;
            width: 15%;
            height: 100%;
            float: left;
        }

        #right_win {
            border: 1px black solid;
            padding: 10px 5px 5px 10px;
            width: 82%;
            height: 100%;
            float: right;
        }

        #down {
            border: 1px black solid;
            width: 100%;
            height: auto;
        }

        .jl {
            padding: 5px 30px 5px 30px;
        }

        th, td {
            padding: 5px 10px;
            width: auto;
            text-align: center;
        }
    </style>
    <script>
        function formatDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            minute = minute < 10 ? ('0' + minute) : minute;
            var second = date.getSeconds();
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d + '&nbsp;&nbsp;&nbsp;' + h + ':' + minute + ':' + second;
        };
        $(function () {
            $("#my_resume").click(function () {
                $.ajax({
                    type: 'post',
                    url: 'my_resume',
                    data: 'cid=' + '${candidate.cid}',
                    dataType: 'json',
                    success: function (msg) {
                        var s = "";
                        if (msg != null) {
                            s = s + "<span class='jl' >我的简历</span>";
                            s = s + "<span class='jl'  >预览</span>";
                            s = s + "<span  class='jl'>修改</span>";
                        } else {
                            s = s + "<span id='add_resume' onclick='add_resume()'>新建简历</span>";
                        }
                        $("#right_win").html(s);
                    }

                });


            });

            $("#rec_list").click(function () {
                a();
            });

            $("#recordList").click(function () {
                if (${candidate.resume==null}) {
                    alert("你还没有简历，请先创建简历");
                    $("#my_resume").click();
                } else {
                    $.ajax({
                        type: 'post',
                        url: 'userRecordList',
                        data: 'rid=' + '${candidate.resume.rid}',
                        dataType: 'json',
                        success: function (msg) {
                            var s = "";
                            s = s + "<table>";
                            s = s + "<tr>";
                            s = s + "<th>应聘岗位</th>";
                            s = s + "<th>申请状态</th>";
                            s = s + "<th>最近更新时间</th>";
                            s = s + "</tr>";
                            if (msg.length == 0) {
                                s = s + "<tr>";
                                s = s + "<td colspan='3'>你还没有发送过应聘申请</td>";
                                s = s + "</tr>";
                            } else {
                                for (var i = 0; i < msg.length; i++) {
                                    s = s + "<tr>";
                                    s = s + "<td>" + msg[i].recruitment.recPosition + "</td>";
                                    s = s + "<td>" + msg[i].label + "</td>";
                                    s = s + "<td>" + formatDate(new Date(msg[i].updateTime.time)) + "</td>";
                                    s = s + "<td><a onclick='sub_interview(" + msg[i].drId + ")' >" + (msg[i].label == "已邀请" ? "确认面试" : "") + "</a></td>";
                                    s = s + "</tr>";
                                }
                            }
                            s = s + "</table>";
                            $("#right_win").html(s);
                        }

                    })
                }

            });

        });


        function add_resume() {
            $("#right_win").load("page/candidate/addresume.jsp");
        }

        function sub_interview(n) {
            $.ajax({
                type: 'get',
                url: 'sub_int',
                data: 'drId=' + n,
                dataType: 'json',
                success: function (msg) {
                    alert(msg.info);
                    $("#recordList").click();
                }
            })
        }

        function a() {
            $.ajax({
                type: 'post',
                url: 'recruitmentList',
                dataType: 'json',
                success: function (date) {
                    var s = "";
                    s = s + "<table>";
                    s = s + "<tr>";
                    s = s + "<th>招聘岗位</th>";
                    s = s + "<th>月薪</th>";
                    s = s + "<th>工作内容</th>";
                    s = s + "<th>工作地点</th>";
                    s = s + "<th>其他要求</th>";
                    s = s + "<th>发布时间</th>";
                    s = s + "<th>申请</th>";
                    s = s + "</tr>";
                    for (var i = 0; i < date.length; i++) {
                        s = s + "<tr>";
                        s = s + "<td>" + date[i].recPosition + "</td>";
                        s = s + "<td>" + date[i].recPay + "元/月</td>";
                        s = s + "<td>" + date[i].workContent + "</td>";
                        s = s + "<td>" + date[i].workAddress + "</td>";
                        s = s + "<td>" + date[i].otherRequirements + "</td>";
                        s = s + "<td>" + formatDate(new Date(date[i].createTime.time)) + "</td>";
                        s = s + "<td><a onclick='send(" + date[i].recId + ")' >发送简历</a></td>";
                        s = s + "</tr>"
                    }
                    s = s + "</table>";
                    $("#right_win").html(s);
                }
            })
        }

        function send(n) {
            if (${candidate.resume==null}) {
                alert("请先创建简历");
                $("#my_resume").click();
            } else {
                $.ajax({
                    type: 'post',
                    url: 'send',
                    data: 'resumeId=' + '${candidate.resume.rid}' + '&recruitmentId=' + n,
                    dataType: 'json',
                    success: function (date) {
                        alert(date.info);
                        $("#recordList").click();
                    }
                })
            }
        }


        window.onload = function () {
            a();
        }

    </script>
</head>
<body>
<div><span>欢迎登录人力资源管理平台</span> <span>你好,${candidate.candName}  <a href="">退出</a>  </span></div>
<div id="down">
    <div id="left_win">
        <span id="rec_list">招聘信息</span>
        <br>
        <span id="my_resume">我的简历</span>
        <br>
        <span id="recordList">申请记录</span>
    </div>
    <div id="right_win" style="overflow-y: auto">
    </div>
</div>


</body>
</html>
