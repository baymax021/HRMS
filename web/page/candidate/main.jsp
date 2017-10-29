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

        #down_top {
            border: 1px black solid;
            width: auto;
            height: auto;
            text-align: center;
        }
        .jl{
            padding: 5px 30px 5px 30px;
        }

    </style>
    <script>
        $(function () {
            $("#my_resume").click(function () {
                $.ajax({
                    type: 'post',
                    url: 'my_resume',
                    data: 'cid=' + '${candidate.cid}',
                    dataType: 'json',
                    success: function (msg) {
                        var s="";
                       if(msg!=null){
                           s= s+"<span class='jl' >我的简历</span>";
                           s=s+"<span class='jl' >预览</span>";
                           s=s+"<span  class='jl'>修改</span>";
                       }else{
                          s=s+"<span id='add_resume' onclick='add_resume()'>新建简历</span>";
                       }
                        $("#down_top").html(s);
                        $("#down_down").html("");
                    }

                });


            });

        });
        function add_resume() {
            console.log(111)
            $("#down_down").load("page/candidate/addresume.jsp");
        }


    </script>
</head>
<body>
<div><span>欢迎登录人力资源管理平台</span> <span>你好,${candidate.candName}  <a href="">退出</a>  </span></div>
<div id="down">
    <div id="left_win">
        <a href="">招聘信息</a>

        <br>
        <span id="my_resume">我的简历</span>
        <br>
        <span id="record">申请记录</span>
        <%--<a href="page/candidate/addresume.jsp">我的简历</a>--%>
    </div>
    <div id="right_win" style="overflow-y: auto">
        <div id="down_top"></div>

        <div id="down_down"></div>

    </div>
</div>


</body>
</html>
