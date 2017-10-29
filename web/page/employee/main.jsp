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
    <style>
        #left_win {
            border: 1px black solid;
            padding: 10px 5px 5px 10px;
            width: 15%;
            height: 100%;
            float: left;
        }

        #right_win {
            border: 1px black solid;
            padding: 10px 5px 5px 10px;
            width: 82%;
            height: 100%;
            float: right;
        }

        #down {
            border: 1px black solid;
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
<div><span>欢迎登录人力资源管理平台</span> <span>你好<a href="">退出</a></span></div>
<div>
    <span>组织架构</span>  <span>招聘管理</span> <span>人事管理</span>
    <span>考勤管理</span>  <span>培训管理</span>  <span>绩效薪资管理</span>
</div>
<div id="down">
    <div id="left_win">
        <a href="">招聘信息</a>

        <br>
        <button id="btn">我的简历</button>
        <%--<a href="page/candidate/addresume.jsp">我的简历</a>--%>
    </div>
    <div id="right_win" style="overflow-y: auto">

    </div>
</div>
</body>
</html>
