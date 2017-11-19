<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/31
  Time: 20:44
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
    <title>新建部门</title>
    <script src="js/myjs.js" charset="UTF-8" type="text/javascript"></script>
    <script src="js/myjs.js" charset="UTF-8" type="text/javascript"></script>
    <link href="css/mystyle.css" rel="stylesheet" type="text/css" charset="UTF-8">
</head>
<body>
<div id="big">
    <form id="depAndPos" action="addDepAndPos" method="post">
        <div id="small1">
            <span class="in1">部门名称</span> <span class="in2"> <input type="text" name="depName"> </span>
            <input type="text" name="depStatus" value="NORMAL" hidden>
            <hr id="line_1">
            <ul class="add_position"></ul>
        </div>
        <div id="small2">
            <p><span class="addPos_Btn" onclick="add_oper()">添加职位（可选）</span></p>
            <span class="btn" onclick="sub_dep()" >确认</span> <input class="btn" type="button" onclick="cancel_dep()" value="取消">
        </div>
    </form>
</div>
</body>
</html>
