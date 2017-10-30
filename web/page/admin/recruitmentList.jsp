<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/29
  Time: 13:25
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
    <title>招聘信息列表</title>
</head>
<body>

${recruitments}
<ol>
    <c:forEach var="recruitment" items="${recruitments}">
        <li>
            ${recruitment.recPosition}
            ${recruitment.recPay}
            ${recruitment.workContent}
            ${recruitment.workAddress}
            ${recruitment.otherRequirements}
            ${recruitment.createTime}
        </li>
    </c:forEach>
</ol>

</body>
</html>
