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
</head>
<body>
<form action="candidate.register" method="post">
    <p>用户名：<input type="text" name="candName"></p>
    <p> 密码：<input type="password" name="password"></p>
    <p><input type="submit" value="注册"><input type="reset" value="重置"></p>
    <a href="page/candidate/login.jsp">登录</a> <a href="page/index.jsp">返回首页</a>
</form>
</body>
</html>
