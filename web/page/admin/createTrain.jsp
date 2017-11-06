<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/11/3
  Time: 10:19
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
    <title>发布培训信息</title>
    <%--<script src="js/myjs.js" type="text/javascript" charset="UTF-8"/>--%>
</head>
<body>
<form id="pxInfo" >
    <span class="in">培训主题</span>
    <span class="in"><input type="text" name="tTitle"></span>
    <br>
    <span class="in">培训时间</span>
    <span class="in">
        <input type="datetime-local" name="tStartTime">&nbsp;~&nbsp;
        <input type="datetime-local" name="tEndTime">
    </span>
    <br>
    <span class="in">培训内容</span>
    <br>
    <textarea name="tContent" cols="100" rows="5" style="resize: none"></textarea>
    <br>
    <div style="width: 700px;height: 350px;">
        <div style="margin: 15px 0 0 15px">
            <span  onclick="selectEmp()"  class="in">选择培训对象</span>
            <br>
            <br>
            <span style="margin: 0  150px 0 10px">部门列表</span>
            <span style="margin: 0  150px 0 10px">职位列表</span>
            <span style="margin: 0  150px 0 10px">员工列表</span>
        </div>
        <div id="pxObjleft" class="pxObj">
        </div>
        <div id="pxObjmid" class="pxObj">
        </div>
        <div id="pxObjright" class="pxObj">
        </div>
    </div>
    <div class="pxSub"><span class="btn" onclick="sub_px()" >确认</span> <input class="btn" type="button" onclick="cancel_px()" value="取消"></div>
</form>
</body>
</html>
