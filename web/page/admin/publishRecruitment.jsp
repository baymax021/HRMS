<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/29
  Time: 10:53
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
    <title>发布招聘</title>
</head>
<body>
<form action="publishRecruitment.do" method="post">
    招聘岗位：<input type="text" name="recPosition" >
    <br>
    工作内容：<input type="text" name="workContent">
    <br>
    月薪：<input type="text" name="recPay"> 元
    <br>
    工作地点： <input type="text" name="workAddress" >
    <br>
    其他要求： <input type="text" name="otherRequirements" >
    <br>
    <input type="submit" value="发布"> <input type="reset" value="重置">
</form>


</body>
</html>
