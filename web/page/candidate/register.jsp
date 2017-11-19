<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/26
  Time: 13:07
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
    <title>游客注册</title>
    <c:if test="${info!=null}">
        <script>
            alert("${info}")
        </script>
    </c:if>
    <link href="css/mystyle.css" rel="stylesheet" type="text/css">
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
        <form action="candidate.register" method="post">
            <p><span class="relo">用户名：</span><span class="relo"><input type="text" name="candName" style="width: 150px"></span></p>
            <p><span class="relo"> 密&nbsp;&nbsp;&nbsp;码：</span><span class="relo"><input type="password" name="password" style="width: 150px"></span></p>
            <p ><input type="submit" value="注册" style="padding: 1px 10px;margin: 0 25px 0  50px"><input type="reset" value="重置" style="padding: 1px 10px"></p>
            <p> <a href="page/candidate/login.jsp" style="margin: 0 25px 0  50px">登录</a> <a href="page/index.jsp">返回首页</a></p>
        </form>
    </div>
</div>
</body>
</html>
