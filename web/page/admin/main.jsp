<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
        .p_body{
            background: url("image/bg.jpg");
            background-size: 100%;
            height: 560px;
        }
    </style>

</head>
<body class="p_body">
<div id="main_header"><span id="header_left">欢迎登录人力资源管理平台</span> <span class="header_right">你好,管理员 &nbsp;<a href=""
                                                                                                    class="header_right">退出</a></span>
</div>

<div id="down">
    <div id="left_win">
        <div id="unview"></div>
        <ul class="menu_big">
            <li class="menu_dh">
                <div class="first_menu" id="rs" >人事管理
                    <div class="xlys" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                    </div>
                </div>
                <ul class="second_menu" id="rs_detail">
                    <li class="third_menu" id="query_dep">查看部门和职位</li>
                    <li class="third_menu" id="query_emp">查看员工</li>
                </ul>
            </li>
            <li class="menu_dh">
                <div class="first_menu" id="kq">考勤管理
                    <div class="xlys" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                    </div>
                </div>
                <ul class="second_menu" id="kq_detail">
                    <li class="third_menu" id="kq_current">当月考勤记录</li>
                    <li class="third_menu" id="kq_lastMonth">上月考勤记录</li>
                </ul>
            </li>
            <li class="menu_dh">
                <div class="first_menu" id="xc">薪酬管理
                    <div class="xlys" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                    </div>
                </div>
                <ul class="second_menu" id="xc_detail">
                    <li class="third_menu" id="xc_last">最近一个月薪资</li>
                    <li class="third_menu" id="xc_mx">结算工资</li>
                    <li class="third_menu" id="xc_fy">复议</li>
                </ul>
            </li>
            <li class="menu_dh">
                <div class="first_menu" id="px">培训管理
                    <div class="xlys" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                    </div>
                </div>
                <ul class="second_menu" id="px_detail">
                    <li class="third_menu" id="px_over">查看已结束培训</li>
                    <li class="third_menu" id="px_not_start">查看未开始培训</li>
                    <li class="third_menu" id="create_px">发布培训通知</li>
                </ul>
            </li>

            <li class="menu_dh">
                <div class="first_menu" id="zp">招聘管理
                    <div class="xlys" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                        <hr class="three_line" >
                    </div>
                </div>
                <ul class="second_menu" id="zp_detail">
                    <li class="third_menu" id="pub_rec">发布招聘信息</li>
                    <li class="third_menu" id="query_rec">查看招聘信息</li>
                    <li class="third_menu" id="query_yp">查看应聘信息</li>
                </ul>
            </li>
        </ul>


    </div>
    <div id="right_win" style="overflow-y: auto">
    </div>
</div>
</body>
</html>
