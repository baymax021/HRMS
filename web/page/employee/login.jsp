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
    <link rel="stylesheet" href="css/mystyle.css" charset="UTF-8">
    <c:if test="${info!=null}">
        <script>
            alert("${info}")
        </script>
    </c:if>
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
        <form action="emp.login" method="post">
            <p><span class="relo">员工编号：</span><span class="relo"><input type="text" name="empId" style="width: 150px"></span></p>
            <p><span class="relo">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span><span class="relo"><input type="password" name="password" style="width: 150px"></span></p>
            <p ><input type="submit" value="登录" style="padding: 1px 10px;margin: 0 25px 0  50px"><input type="reset" value="重置" style="padding: 1px 10px"></p>
            <p><a href="page/index.jsp" style="margin: 0 25px 0  70px">返回首页</a></p>




            <%--<p>员工编号：<input type="text" name="empId"></p>--%>
            <%--<p> 密码：<input type="password" name="password"></p>--%>
            <%--<p><input type="submit" value="登录"> <input type="reset" value="重置"></p>--%>
            <%--<a href="page/index.jsp">返回首页</a>--%>
        </form>
    </div>
</div>

</body>
</html>
