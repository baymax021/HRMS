<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/11/3
  Time: 22:36
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
    <title>当前时间</title>
</head>
<body>
<div id="currentTime" style="width: auto;height: 200px;font-size: 50px">
    <script>
        document.getElementById('currentTime').innerHTML = new Date().toLocaleString() + '星期' + '日一二三四五六'.charAt(new Date().getDay());
        setInterval(
            "document.getElementById('currentTime').innerHTML = new Date().toLocaleString() + '星期' + '日一二三四五六'.charAt(new Date().getDay());", 1000
        )
    </script>
</div>
</body>
</html>
