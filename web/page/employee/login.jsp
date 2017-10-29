<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/26
  Time: 13:04
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
    <title>主页</title>
    <c:if test="${info!=null}">
        <script>
            alert("${info}")
        </script>
    </c:if>
</head>
<body>
<form action="emp.login" method="post">
    <p>员工编号：<input type="text" name="empId"></p>
    <p> 密码：<input type="password" name="password"></p>
    <p><input type="submit" value="登录"> <input type="reset" value="重置"></p>
    <a href="page/index.jsp">返回首页</a>
</form>
</body>
</html>
