<%--
  Created by IntelliJ IDEA.
  User: shmil
  Date: 2017/10/26
  Time: 13:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <title>Title</title>
    <base href=" <%=basePath%>">
    <script src="js/jquery-3.0.0.js"></script>
    <style>
        .need {
            color: red;
        }

        table, td, th {
            text-align: center;
        }
        h4{
            color: #454545;
        }
    </style>

    <script>
        $(function () {
            $("#save_basic").click(function () {
                $("#basicInfo").attr("hidden", 'hidden');
            });
            $("#basic").click(function () {
                $("#basicInfo").removeAttr("hidden");
            });
            $("#edu").click(function () {
                $("#t_edu").removeAttr("hidden");
            });
            $("#save_edu").click(function () {
                $("#t_edu").attr("hidden", 'hidden');
            });

            $("#work_exp").click(function () {
                $("#t_work_exp").removeAttr("hidden");
            });
            $("#save_work_exp").click(function () {
                $("#t_work_exp").attr("hidden", 'hidden');
            });

            $("#pro_exp").click(function () {
                $("#t_pro_exp").removeAttr("hidden");
            });
            $("#save_pro_exp").click(function () {
                $("#t_pro_exp").attr("hidden", 'hidden');
            });
        })
    </script>
</head>
<body>
<div></div>
<div>
    <form action="addResume" method="post">
        <h4 id="basic">基本信息</h4>
        <hr>
        <div id="basicInfo">
            <input type="text" name="candidateId" value="${candidate.cid}" hidden>
            <p>
                <span class="need">*</span>真实姓名：<input type="text" name="realName">
                <span class="need">*</span>性别：<input type="radio" name="gender" value="male">男
                <input type="radio" name="gender" value="female">女
            </p>
            <p>
                <span class="need">*</span>出生日期：<input type="date" name="dataOfBirth">
                <span class="need">*</span>手机号码：<input type="text" name="phone">
            </p>
            <p>
                <span class="need">*</span>电子邮箱：<input type="email" name="email">
                <span class="need">*</span>户籍：<input type="text" name="huji">
            </p>
            <p>
                <span class="need">*</span>住址：<input type="text" name="address">
                <span class="need">*</span>婚姻状况：<input type="text" name="married">
            </p>
            <p>
                <span class="need">*</span>自我评价：<textarea name="selfEvaluation" cols="40" rows="8"></textarea>
                <span class="need">*</span>上传头像：<input type="file" name="photo">
            </p>
            <input type="button" id="save_basic" value="保存">
            <input type="button" id="res" value="重置">
        </div>

        <h4 id="edu">教育经历</h4>
        <hr>
        <table id="t_edu" hidden width="90%">
            <thead>
            <tr>
                <th>就读时间</th>
                <th>学校名称</th>
                <th>所学专业</th>
                <th>学历</th>
            </tr>
            </thead>
            <tr>
                <td><input type="date" name="startTime">
                    至 <input type="date" name="endTime"></td>
                <td><input type="text" name="school"></td>
                <td><input type="text" name="major"></td>
                <td><input type="text" name="degree"></td>
                <td><input type="button" id="1" name="删除"></td>
            </tr>
            <tr>
                <td><input type="date" name="startTime">
                    至<input type="date" name="endTime"></td>
                <td><input type="text" name="school"></td>
                <td><input type="text" name="major"></td>
                <td><input type="text" name="degree"></td>
                <td>删除</td>
            </tr>
            <tfoot>
            <td colspan="4">
                <input type="button" id="add_edu" value="继续添加教育信息">

                <input type="button" id="save_edu" value="保存">
            </td>
            </tfoot>

        </table>

        <h4 id="work_exp"> 工作经历</h4>
        <hr>
        <table id="t_work_exp" hidden width="90%">
            <thead>
            <tr>
                <th>时间</th>
                <th>公司名称</th>
                <th>职位</th>
                <th>主要工作内容</th>
            </tr>
            </thead>
            <tr>
                <td><input type="date" name="startDate">
                    至 <input type="date" name="endDate"></td>
                <td><input type="text" name="company"></td>
                <td><input type="text" name="position"></td>
                <td><input type="text" name="jobContent"></td>
                <td><input type="button" id="2" name="删除"></td>
            </tr>
            <tr>
                <td><input type="date" name="startDate">
                    至 <input type="date" name="endDate"></td>
                <td><input type="text" name="company"></td>
                <td><input type="text" name="position"></td>
                <td><input type="text" name="jobContent"></td>
                <td><input type="button" id="22" name="删除"></td>
            </tr>
            <tfoot>
            <td colspan="4">
                <input type="button" id="add_work_exp" value="继续添加工作经历">

                <input type="button" id="save_work_exp" value="保存">
            </td>
            </tfoot>
        </table>

        <h4  id="pro_exp"> 项目经验</h4>
        <hr>
        <table id="t_pro_exp" hidden width="90%">
            <thead>
            <tr>
                <th>项目名称</th>
                <th>项目描述</th>
            </tr>
            </thead>
            <tr>
                <td><input type="text" name="projectName"></td>
                <td><input type="text" name="projectDescription"></td>
                <td><input type="button" id="3" name="删除"></td>
            </tr>
            <tr>
                <td><input type="text" name="projectName"></td>
                <td><input type="text" name="projectDescription"></td>
                <td><input type="button" id="4" name="删除"></td>
            </tr>
            <td colspan="4">
                <input type="button" id="add_pro_exp" value="继续添加工作经历">

                <input type="button" id="save_pro_exp" value="保存">
            </td>
            </tfoot>
        </table>

        <input type="submit" value="保存简历">
    </form>
</div>

</body>
</html>
