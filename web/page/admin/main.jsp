<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/28
  Time: 15:30
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

        .xxk {
            width: 70%;
            height: auto;
            clear: both;
        }

        #zp,#rs {
            font-size: 18px;
        }

        .zp, .rs {
            float: right;
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
            return y + '-' + m + '-' + d + '&nbsp;&nbsp;' + h + ':' + minute + ':' + second;
        };
        $(function () {
            $("#zp").click(function () {
                $(".zp").css('display', $(".zp").css('display') == 'none' ? 'block' : 'none');
            });
            $("#rs").click(function () {
                $(".rs").css('display', $(".rs").css('display') == 'none' ? 'block' : 'none');
            });


            $("#pub_rec").click(function () {
                var s = "<form>\n" +
                    "    招聘岗位：<input type=\"text\"  id=\"recPosition\" >\n" +
                    "    <br>\n" +
                    "    工作内容：<input type=\"text\" id=\"workContent\">\n" +
                    "    <br>\n" +
                    "    月薪：<input type=\"text\" id=\"recPay\"> 元\n" +
                    "    <br>\n" +
                    "    工作地点： <input type=\"text\" id=\"workAddress\" >\n" +
                    "    <br>\n" +
                    "    其他要求： <input type=\"text\" id=\"otherRequirements\" >\n" +
                    "    <br>\n" +
                    "    <span id='pub' onclick='pub()'>发布</span> <input type=\"reset\" value=\"重置\">\n" +
                    "</form>"
                $("#right_win").html(s);
            });
            $("#query_rec").click(function () {
                $.ajax({
                    type: 'post',
                    url: 'recruitmentList',
                    data: null,
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
                        s = s + "</tr>";
                        for (var i = 0; i < date.length; i++) {
                            s = s + "<tr>";
                            s = s + "<td>" + date[i].recPosition + "</td>";
                            s = s + "<td>" + date[i].recPay + "元/月</td>";
                            s = s + "<td>" + date[i].workContent + "</td>";
                            s = s + "<td>" + date[i].workAddress + "</td>";
                            s = s + "<td>" + date[i].otherRequirements + "</td>";
                            s = s + "<td>" + formatDate(new Date(date[i].createTime.time)) + "</td>";
                            s = s + "</tr>"
                        }
                        s = s + "</table>";
                        $("#right_win").html(s);
                    }
                })

            });

            $("#query_yp").click(function () {
                $.ajax({
                    type: 'post',
                    url: 'recordList',
                    dataType: 'json',
                    success: function (msg) {
                        var s = "";
                        s = s + "<table>";
                        s = s + "<tr>";
                        s = s + "<th>应聘岗位</th>";
                        s = s + "<th>最近更新时间</th>";
                        s = s + "<th>当前状态</th>";
                        s = s + "<th colspan='2'>操作</th>";
                        s = s + "</tr>";
                        if (msg.length == 0) {
                            s = s + "<tr>";
                            s = s + "<td colspan='4'>还没有人来应聘</td>";
                            s = s + "</tr>";
                        } else {
                            for (var i = 0; i < msg.length; i++) {
                                s = s + "<tr>";
                                s = s + "<td>" + msg[i].recruitment.recPosition + "</td>";
                                s = s + "<td>" + formatDate(new Date(msg[i].updateTime.time)) + "</td>";
                                s = s + "<td>" + msg[i].label + "</td>";
                                s = s + "<td><a id=" + msg[i].drId + " onclick='update_label(" + msg[i].drId + ")'>" + (msg[i].label == "已投递" ? "查阅" : (msg[i].label == "已查阅" ? "发送面试邀请" : (msg[i].label == "已邀请" ? "等待对方确认" : "录用"))) + "</a> </td>";
                                s = s + "<td><a onclick='query_resume(" + msg[i].drId + ")'>查看简历</a> </td>";
                                s = s + "</tr>";
                            }
                        }
                        s = s + "</table>";
                        $("#right_win").html(s);
                    }
                })
            })


            $("#query_dep").click(function () {
                $.ajax({
                    type: 'post',
                    url: 'departmentList',
                    dataType: 'json',
                    success:function (data) {

                    }
                })


            });







        });

        function update_label(n) {
            var text = document.getElementById(n).innerHTML;
            if (text == "查阅") {
                query_resume(n);
            } else if (text == "录用") {


            } else {
                $.ajax({
                    type: 'get',
                    url: 'update',
                    data: "drId=" + n,
                    dataType: 'json',
                    success: function (msg) {
                        alert(msg.info);
                        $("#query_yp").click();
                    }
                })

            }

        }

        function hire(n) {
            $.ajax({
                type: 'get',
                url: 'hireNew',
                data: "drId=" + n,
                dataType: 'json',
                success: function (msg) {
                    alert(msg.info);
                    $("#query_yp").click();
                }
            })
        }

        function query_resume(n) {
            $.ajax({
                type: 'get',
                url: 'query_resume',
                data: "drId=" + n,
                dataType: 'json',
                success: function (msg) {
                    console.log(msg)
                }
            })
        }


        function pub() {
            var recPosition = document.getElementById("recPosition").value;
            var workContent = document.getElementById("workContent").value;
            var recPay = document.getElementById("recPay").value;
            var workAddress = document.getElementById("workAddress").value;
            var otherRequirements = document.getElementById("otherRequirements").value;
            $.ajax({
                type: 'post',
                url: 'publishRecruitment.do',
                data: "recPosition=" + recPosition + "&workContent=" + workContent + "&recPay=" + recPay + "&workAddress=" + workAddress + "&otherRequirements=" + otherRequirements,
                dataType: 'json',
                success: function (msg) {
                    alert(msg.info);
                    $("#query_rec").click();
                }
            })
        }

    </script>
</head>
<body>
<div><span>欢迎登录人力资源管理平台</span> <span>你好管理员<a href="">退出</a></span></div>

<div id="down">
    <div id="left_win">
        <div class="xxk">
            <a id="zz">组织架构</a>
        </div>
        <div class="xxk">
            <a id="rs">人事管理</a>
            <div class="rs" style="display: none">
                <span id="query_dep">查看所有部门</span>
                <br>
                <span id="query_pos">查看所有职位</span>
            </div>
        </div>
        <div class="xxk">
            <a id="kq">考勤管理</a>
        </div>
        <div class="xxk">
            <a id="xc">薪酬管理</a>
        </div>
        <div class="xxk">
            <a id="px">培训管理</a>
        </div>
        <div class="xxk">
            <a id="zp">招聘管理</a>
            <div class="zp" style="display: none">
                <span id="pub_rec">发布招聘信息</span>
                <br>
                <span id="query_rec">查看招聘信息</span>
                <br>
                <span id="query_yp">查看应聘信息</span>
            </div>
        </div>
    </div>
    <div id="right_win" style="overflow-y: auto"></div>
</div>
</body>
</html>
