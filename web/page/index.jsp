<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/25
  Time: 23:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%
        String path = request.getContextPath();
        String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
    %>
    <base href=" <%=basePath%>">
    <title>首页</title>
    <link rel="stylesheet" href="css/mystyle.css" charset="UTF-8">
    <style>
        #main{
            background: url("image/main.jpg");
            background-size: 90%;
            width: 100%;
            height: 480px;
            padding-top: 150px;
        }
    </style>

</head>
<body>
<div id="main">
    <span id="welcome">欢迎使用人力资源管理平台</span>
    <div id="candRL">
        <p style="margin-top: 26px"><a href="page/employee/login.jsp" style="font-size: 30px;margin-left: 50px;text-decoration:none;color: white ">员工登录</a></p>
        <p ><a href="page/candidate/login.jsp" style="font-size: 30px;margin-left:  50px;text-decoration:none;color: white ">游客入口</a></p>
    </div>
</div>

</body>
</html>
