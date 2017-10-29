<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/25
  Time: 23:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <title>游客登录</title>
    <base href=" <%=basePath%>">
    <c:if test="${info!=null}">
        <script>
            alert("${info}")
        </script>
    </c:if>
</head>
<body>
<form action="candidate.login" method="post">
    <p>用户名：<input type="text" name="candName"></p>
    <p> 密码：<input type="password" name="password"></p>
    <p><input type="submit" value="登录"><input type="reset" value="重置"></p>
    <a href="page/candidate/register.jsp">注册</a> <a href="page/index.jsp">返回首页</a>
</form>


</body>
</html>
