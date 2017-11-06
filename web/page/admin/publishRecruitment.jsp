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
    <style>
        .in{
            width: 200px;
            display:inline-block;
        }
    </style>
</head>
<body>
<form action="publishRecruitment.do" method="post">
    <span class="in">招聘岗位：</span><span class="in"><input type="text" name="recPosition" ></span>
    <br>
    <span class="in">工作内容:</span><span class="in"><input type="text" name="workContent"></span>
    <br>
    <span class="in"> 月薪：</span><span class="in"><input type="text" name="recPay"> 元</span>
    <br>
    <span class="in"> 工作地点：</span><span class="in"> <input type="text" name="workAddress" ></span>
    <br>
    <span class="in">  其他要求：</span><span class="in"> <input type="text" name="otherRequirements" ></span>
    <br>
    <p style="text-align: center ; width: 400px;">
        <input type="submit" value="发布"> <input type="reset" value="重置">
    </p>
</form>


</body>
</html>
