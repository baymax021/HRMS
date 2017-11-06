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
        String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
    <base href=" <%=basePath%>">
    <title>首页</title>
    <link rel="stylesheet" href="css/mystyle.css" charset="UTF-8">
</head>
<body>
<div id="main_header" ><span id="header_left">欢迎使用人力资源管理平台</span>
</div>
<div>
<a href="page/employee/login.jsp">员工登录</a>
<a href="page/candidate/login.jsp">游客入口</a>
</div>
</body>
</html>
