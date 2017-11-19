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
    <link rel="stylesheet" href="css/mystyle.css" charset="UTF-8">
    <script src="js/jquery-3.0.0.js" charset="UTF-8" type="text/javascript"></script>
    <script src="js/myjs.js" charset="UTF-8" type="text/javascript"></script>
    <style>
        .p_body{
            background: url("image/bg.jpg");
            background-size: 100%;
            height: 560px;
        }
    </style>
    <script>
        window.onload = $(function () {
            $("#rec_list").click();

        });
    </script>

</head>
<body  class="p_body">
<div id="main_header"><span id="header_left">欢迎登录人力资源管理平台</span> <span class="header_right">你好,${candidate.candName} <a href=""
                                                                                                            class="header_right">退出</a></span>
</div>
<div id="down">
    <input hidden id="rid" value="${candidate.resume.rid}">
    <input hidden id="cid" value="${candidate.cid}">
    <div id="left_win">
        <div id="unview"></div>
        <ul class="menu_big">
        <li class="menu_dh">
            <div class="first_menu" id="rec_list">招聘信息
            </div>
            <ul class="second_menu" >
            </ul>
        </li>
        <li class="menu_dh">
            <div class="first_menu" id="my_resume">我的简历
            </div>
            <ul class="second_menu" >
            </ul>
        </li>
        <li class="menu_dh">
            <div class="first_menu" id="recordList">申请记录
            </div>
            <ul class="second_menu" >
            </ul>
        </li>
        </ul>
    </div>
    <div id="right_win" style="overflow-y: auto">
    </div>
</div>


</body>
</html>
