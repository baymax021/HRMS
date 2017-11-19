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
    <link rel="stylesheet" href="css/mystyle.css" charset="UTF-8">
    <script src="js/jquery-3.0.0.js" charset="UTF-8" type="text/javascript"></script>
    <script src="js/myjs.js" charset="UTF-8" type="text/javascript"></script>
    <style>
        .need {
            color: red;
        }

        table, td, th {
            text-align: center;
        }

        h3 {
            margin: 5px;
            color: black;
        }

        span.res_bas {
            margin-left: 20px;
            display: inline-block;
            width: 150px;
        }
    </style>

    <script>
        $(function () {

        });









    </script>
</head>
<body>
<div></div>
<div>
    <form action="addResume" method="post" id="my_res_form">
        <h3 id="basic">基本信息</h3>
        <hr>
        <div id="basicInfo">
            <input type="text" name="candidateId" value="${candidate.cid}" hidden>

            <p>
                <span class="res_bas"><span class="need">*</span>真实姓名</span><span class="res_bas"><input type="text" id="realName"
                                                                                                         name="realName"
                                                                                                         <%--easyform="length:4-16;char-normal;ajax:uid_exist();real-time;" message="用户名必须为4―16位的英文字母或数字" easytip="disappear:lost-focus;theme:blue;" --%>></span>
                <span class="res_bas"><span class="need">*</span>性别：<input type="radio" name="gender" value="male" checked>男
                    <input type="radio" name="gender" value="female">女</span>
            </p>
            <p>
                <span class="res_bas"><span class="need">*</span>出生日期：</span><span class="res_bas"><input type="date"
                                                                                                          name="dataOfBirth"></span>
                <span class="res_bas"><span class="need">*</span>手机号码：</span><span class="res_bas"><input type="text"
                                                                                                          name="phone"></span>
            </p>
            <p>
                <span class="res_bas"><span class="need">*</span>电子邮箱：</span><span class="res_bas"><input type="email"
                                                                                                          name="email"></span>
                <span class="res_bas"><span class="need">*</span>户籍：</span><span class="res_bas"><input type="text"
                                                                                                        name="huji"></span>
            </p>
            <p>
                <span class="res_bas"> <span class="need">*</span>住址：</span><span class="res_bas"><input type="text"
                                                                                                         name="address"></span>
                <span class="res_bas"><span class="need">*</span>婚姻状况：</span><span class="res_bas"><input type="text"
                                                                                                          name="married"></span>
            </p>
            <p>
                <span class="res_bas"><span class="need">*</span>自我评价：</span>
                <textarea name="selfEvaluation" cols="60" rows="3" style="resize: none"></textarea>
                <span class="res_bas"><span class="need">*</span>上传头像：</span><span class="res_bas"><input type="file"
                                                                                                          name="photo"></span>
            </p>
            <p style="text-align: center">
                <input type="button" id="save_basic" value="保存">
                <input type="reset" id="res" value="重置">
            </p>
        </div>

        <h3 id="edu">教育经历</h3>
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
            <tbody>
            <tr>
                <td><input type="date" name="startTime">
                    至 <input type="date" name="endTime"></td>
                <td><input type="text" name="school"></td>
                <td><input type="text" name="major"></td>
                <td><input type="text" name="degree"></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
            <td colspan="4">
                <input type="button" id="add_edu" value="继续添加教育信息">
                <input type="button" id="save_edu" value="保存">
            </td>
            </tr>
            </tfoot>
        </table>

        <h3 id="work_exp"> 工作经历</h3>
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
            <tbody>
            <tr>
                <td><input type="date" name="startDate">
                    至 <input type="date" name="endDate"></td>
                <td><input type="text" name="company"></td>
                <td><input type="text" name="position"></td>
                <td><input type="text" name="jobContent"></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
            <td colspan="4">
                <input type="button" id="add_work_exp" value="继续添加工作经历">

                <input type="button" id="save_work_exp" value="保存">
            </td>
            </tr>
            </tfoot>
        </table>

        <h3 id="pro_exp"> 项目经验</h3>
        <hr>
        <table id="t_pro_exp" hidden width="90%">
            <thead>
            <tr>
                <th colspan="1">项目名称</th>
                <th colspan="3">项目描述</th>
            </tr>
            </thead>
           <tbody>
           <tr>
               <td><input type="text" name="projectName" style="width: 80%"></td>
               <td colspan="3"><textarea style="resize: none;width: 100%;height: 80px" name="projectDescription"></textarea></td>
           </tr>
           </tbody>
            <tfoot>
            <tr>
            <td colspan="4">
                <input type="button" id="add_pro_exp" value="继续添加项目经历">
                <input type="button" id="save_pro_exp" value="保存">
            </td>
            </tr>
            </tfoot>
        </table>
        <p style="text-align: center;">

        <input type="submit" value="保存简历" style="font-size: 20px;border-radius: 2px;background: none;border: 1px solid gray;">
        </p>
    </form>
</div>

</body>
</html>
