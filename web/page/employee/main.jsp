<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/28
  Time: 15:30
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
    <title>主页</title>
    <link rel="stylesheet" href="css/mystyle.css" charset="UTF-8">
    <script src="js/jquery-3.0.0.js" charset="UTF-8" type="text/javascript"></script>
    <script src="js/myjs.js" charset="UTF-8" type="text/javascript"></script>
    <style>
        .p_body {
            background: url("image/bg.jpg");
            background-size: 100%;
            height: 560px;
        }
    </style>
    <script>
        window.onload = $(function () {
            $("#main").click();

        });
    </script>
</head>
<body class="p_body">
<div id="main_header"><span id="header_left">欢迎登录人力资源管理平台</span> <span
        class="header_right">你好,${sessionScope.employee.realName}&nbsp;<a href=""
                                                                          class="header_right">退出</a></span>
</div>
<div id="unview"></div>
<input hidden id="empId" value="${sessionScope.employee.empId}">

<div id="down">
    <div id="left_win">
        <ul class="menu_big">
            <li class="menu_dh">
                <div class="first_menu" id="main">首页
                    <%--<div class="xlys" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                    </div>--%>
                </div>
                <ul class="second_menu">
                </ul>
            </li>
            <li class="menu_dh">
                <div class="first_menu" id="kq">我的考勤
                    <div class="xlys">
                        <hr class="three_line">
                        <hr class="three_line">
                        <hr class="three_line">
                    </div>
                </div>
                <ul class="second_menu" id="kq_detail">
                    <li class="third_menu" id="mykq_current">当月考勤记录</li>
                    <li class="third_menu" id="mykq_lastMonth">上月考勤记录</li>
                </ul>
            </li>

            <li class="menu_dh">
                <div class="first_menu" id="xc">我的工资条
                    <div class="xlys">
                        <hr class="three_line">
                        <hr class="three_line">
                        <hr class="three_line">
                    </div>
                </div>
                <ul class="second_menu" id="xc_detail">
                    <li class="third_menu" id="my_xc_mx">工资条</li>
                    <li class="third_menu" id="my_xc_fy">复议处理</li>
                </ul>
            </li>
            <li class="menu_dh">
                <div class="first_menu" id="px">我的培训
                    <div class="xlys">
                        <hr class="three_line">
                        <hr class="three_line">
                        <hr class="three_line">
                    </div>
                </div>
                <ul class="second_menu" id="px_detail">
                    <li class="third_menu" id="query_px_over">查看已结束培训</li>
                    <li class="third_menu" id="query_px_none">查看未开始培训</li>
                </ul>
            </li>
            <li class="menu_dh">
                <div class="first_menu" id="pc">个人中心
                    <div class="xlys">
                        <hr class="three_line">
                        <hr class="three_line">
                        <hr class="three_line">
                    </div>
                </div>
                <ul class="second_menu" id="pc_detail">
                    <li class="third_menu" id="query_pc">基本信息</li>
                    <li class="third_menu" id="update_pc">更改密码</li>
                </ul>
            </li>

        </ul>


    </div>
    <div id="right_win" style="overflow-y: auto">

    </div>
</div>
</body>
</html>