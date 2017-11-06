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
    <%--<script>--%>
        <%--$(function () {--%>

            <%--$("#cancel_dep").click(function () {--%>
                <%--$("#unview").css('display', 'none');--%>
                <%--$("#unview").css('z-index', '-1');--%>

            <%--})--%>


            <%--$("#add_oper").click(function () {--%>
                <%--var li = $("<li class='li_1'><span class=\"in1\">职位名称</span><span class=\"in2\"><input type=\"text\" name=\"posName\"></span></li>");--%>
                <%--$(".add_position").append(li);--%>
            <%--})--%>
        <%--})--%>
    <%--</script>--%>
    <%--<style>--%>
        <%--.in1 {--%>
            <%--width: 100px;--%>
            <%--text-align: left;--%>
            <%--display: inline-block;--%>
        <%--}--%>

        <%--.in2 {--%>
            <%--width: 220px;--%>
            <%--text-align: left;--%>
            <%--display: inline-block;--%>
        <%--}--%>

        <%--#big {--%>
            <%--background-color: white;--%>
            <%--text-align: center;--%>
            <%--padding: 20px  30px;--%>
            <%--border: 1px solid rgba(61, 122, 217, 0.85);--%>
            <%--border-radius: 5px;--%>
            <%--width: 400px;--%>
            <%--height: 300px;--%>
            <%--box-shadow: 0 0 3px #000;--%>
        <%--}--%>

        <%--.add_position,.li_1{--%>
            <%--list-style: none;--%>
            <%--margin: 3px 0px;--%>
            <%--padding: 0px;--%>
        <%--}--%>

        <%--#small2 {--%>
            <%--text-align: center;--%>
            <%--position: absolute;--%>
            <%--width: 400px;--%>
            <%--top: 230px;--%>
        <%--}--%>

        <%--#small1 {--%>
            <%--overflow-y: auto;--%>
            <%--width: 400px;--%>
            <%--height: 200px;--%>
        <%--}--%>

        <%--#add_oper {--%>
            <%--border: 1px solid #6989f5;--%>
            <%--background-color: #6989f5;--%>
            <%--border-radius: 2px;--%>
            <%--padding: 1px 10px;--%>
        <%--}--%>

        <%--.btn {--%>
            <%--font-size: 15px;--%>
            <%--padding: 2px 15px;--%>
            <%--border-radius: 3px;--%>
            <%--border: 1px solid  gray;--%>
        <%--}--%>
    <%--</style>--%>
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
