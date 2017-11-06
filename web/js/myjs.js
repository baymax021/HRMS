/**
 *
 * 时间格式转换工具
 *
 **/
function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + '&nbsp;&nbsp;' + h + ':' + minute + ':' + second;
};

Array.prototype.contains = function ( needle ) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}


$(function () {

    $("#zp").click(function () {
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });
    $("#rs").click(function () {
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });

    $("#pc").click(function () {
        console.log(111)
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });


    $("#px").click(function () {
        console.log(222)
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });
    $("#xc").click(function () {
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });

    $("#kq").click(function () {
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });

    $("#zz").click(function () {
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });

    $("#main").click(function () {
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
    });


    /**
     * 员工查看自己的个人基本信息
     */
    $("#query_pc").click(function () {
        $.ajax({
            type:'post',
            url:'mycenter',
            dataType:'json',
            success:function (data) {
                var bas =data.resume.basicInfo;
                var dep = data.position.department;
                var pos = data.position;
                var s ="";
                s = s + "<table id='basic_view' style='text-align: left '>";
                s = s + "   <tr>";
                s = s + "       <td colspan='6' class='res_title'>基本信息</td>";
                s = s + "   </tr>";
                s = s + "   <tr>";
                s = s + "       <td class='detail_info'>姓名</td>";
                s = s + "       <td class='user_info'>" + bas.realName + "</td>";
                s = s + "       <td class='detail_info'>性别</td>";
                s = s + "       <td class='user_info'>" + bas.gender + "</td>";
                s = s + "       <td rowspan='4' colspan='2' class='user_photo'>" + bas.photo + "</td>";
                s = s + "   </tr>";

                s = s + "   <tr>";
                s = s + "       <td class='detail_info'>出生日期</td>";
                s = s + "       <td class='user_info'>" + bas.dateOfBirth + "</td>";
                s = s + "       <td class='detail_info'>手机号码</td>";
                s = s + "       <td class='user_info'>" + bas.phone + "</td>";
                s = s + "   </tr>";

                s = s + "   <tr>";
                s = s + "       <td class='detail_info'>电子邮箱</td>";
                s = s + "       <td class='user_info'>" + bas.email + "</td>";
                s = s + "       <td class='detail_info'>户籍</td>";
                s = s + "       <td class='user_info'>" + bas.huji + "</td>";
                s = s + "   </tr>";

                s = s + "   <tr>";
                s = s + "       <td class='detail_info'>婚姻状况</td>";
                s = s + "       <td class='user_info'>" + bas.married + "</td>";
                s = s + "       <td class='detail_info'>住址</td>";
                s = s + "       <td class='user_info'>" +bas.address + "</td>";
                s = s + "   </tr>";

                s = s + "   <tr>";
                s = s + "       <td colspan='6' class='res_title'>员工信息</td>";
                s = s + "   </tr>";

                s = s + "   <tr>";
                s = s + "       <td class='detail_info'>所属部门</td>";
                s = s + "       <td class='user_info'>" + dep.depName + "</td>";
                s = s + "       <td class='detail_info'>职位</td>";
                s = s + "       <td class='user_info'>" + pos.posName + "</td>";
                s = s + "       <td class='detail_info'>状态</td>";
                s = s + "       <td class='user_info'>" + data.empStatus + "</td>";
                s = s + "   </tr>";

                s = s + "</table>";


                $("#right_win").html(s)
                $("#basic_view").find("tr,td").css('text-align', 'left');

            }
        })
    })

    /**
     * 员工更改自己的登录密码
     */
    $("#update_pc").click(function () {
        var s ="";
        s = s+"<form id='update_passwd'>"
        s = s+"<span>请输入原密码</span><span><input type='password' name='old_password'></span><br>"
        s = s+"<span>请输入新密码</span><span><input type='password' name='new_password'></span><br>"
        s = s+"<span>请再次输入新密码</span><span><input type='password' name='sec_new_password'></span><br>"
        s = s+"<span class='btn' onclick='sub_update_passwd()' >确认</span>";
        s = s+"</form>";
        $("#right_win").html(s);
    })



    /**
     * 查看所有员工
     */
    $("#query_emp").click(function () {
        $.ajax({
            type: 'get',
            url: 'employeeList',
            dataType: 'json',
            success: function (data) {
                // data = JSON.parse(data);


            }
        })

    })


    /**
     *
     * 发布招聘信息
     *
     **/
    $("#pub_rec").click(function () {
        $("#right_win").load("page/admin/publishRecruitment.jsp");
    });


    /**
     *
     * 查看招聘信息
     *
     **/
    $("#query_rec").click(function () {
        $.ajax({
            type: 'post',
            url: 'recruitmentList',
            data: null,
            dataType: 'json',
            success: function (date) {
                var s = "";
                s = s + "<table>";
                s = s + "<tr>";
                s = s + "<th>招聘岗位</th>";
                s = s + "<th>月薪</th>";
                s = s + "<th>工作内容</th>";
                s = s + "<th>工作地点</th>";
                s = s + "<th>其他要求</th>";
                s = s + "<th>发布时间</th>";
                s = s + "</tr>";
                for (var i = 0; i < date.length; i++) {
                    s = s + "<tr>";
                    s = s + "<td>" + date[i].recPosition + "</td>";
                    s = s + "<td>" + date[i].recPay + "元/月</td>";
                    s = s + "<td>" + date[i].workContent + "</td>";
                    s = s + "<td>" + date[i].workAddress + "</td>";
                    s = s + "<td>" + date[i].otherRequirements + "</td>";
                    s = s + "<td>" + formatDate(new Date(date[i].createTime.time)) + "</td>";
                    s = s + "</tr>"
                }
                s = s + "</table>";
                $("#right_win").html(s);
            }
        })

    });


    /**
     *
     * 查看应聘信息
     *
     **/
    $("#query_yp").click(function () {
        $.ajax({
            type: 'post',
            url: 'recordList',
            dataType: 'json',
            success: function (msg) {
                var s = "";
                s = s + "<table>";
                s = s + "<tr>";
                s = s + "<th>应聘岗位</th>";
                s = s + "<th>最近更新时间</th>";
                s = s + "<th>当前状态</th>";
                s = s + "<th colspan='2'>操作</th>";
                s = s + "</tr>";
                if (msg.length == 0) {
                    s = s + "<tr>";
                    s = s + "<td colspan='4'>还没有人来应聘</td>";
                    s = s + "</tr>";
                } else {
                    for (var i = 0; i < msg.length; i++) {
                        s = s + "<tr>";
                        s = s + "<td>" + msg[i].recruitment.recPosition + "</td>";
                        s = s + "<td>" + formatDate(new Date(msg[i].updateTime.time)) + "</td>";
                        s = s + "<td>" + msg[i].label + "</td>";
                        s = s + "<td><a id=" + msg[i].drId + " onclick='update_label(" + msg[i].drId + ")'>" + (msg[i].label == "已投递" ? "查阅" : (msg[i].label == "已查阅" ? "发送面试邀请" : (msg[i].label == "应邀面试" ? "录用" : ""))) + "</a></td>",
                            s = s + "<td><a onclick='query_resume(" + msg[i].drId + ")'>查看简历</a> </td>";
                        s = s + "</tr>";
                    }
                }
                s = s + "</table>";
                $("#right_win").html(s);
            }
        })
    })


    /**
     *
     * 查看部门和职位设置信息
     *
     **/
    $("#query_dep").click(function () {
        $.ajax({
            type: 'post',
            url: 'departmentList',
            data: null,
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = "<ul id='head_ul'>\n" +
                    "        <li class='first_line'>部门编号</li>\n" +
                    "        <li class='first_line'>部门名称</li>\n" +
                    "        <li class='first_line'>职位编号</li>\n" +
                    "        <li class='first_line'>职位名称</li>\n" +
                    "        <li class='first_line'>操作</li>\n" +
                    "    </ul>\n";
                for (var i = 0; i < data.length; i++) {
                    s = s + "<form action='update_dep' id='" + data[i].depId + "' method='post'>"
                    s = s + "<div class='form_con'>";

                    if (data[i].positionList.length == 1 && data[i].positionList[0].posId == 0) {
                        s = s + " <ul class='first_ul'>\n" +
                            "        <li class='depId' style='line-height: 90px'>" + data[i].depId + "<input type='text' hidden name='depId' value='" + data[i].depId + "'></li>\n" +
                            "        <li class='depName' style='line-height: 90px'><input class='dep' name='depName' readonly value=" + data[i].depName + "></li>\n";
                        s = s + "        <li class='posNone' style='line-height: 90px' >暂无职位</li>\n";
                        s = s + "        <li class='oper' >";
                        s = s + "               <ul class='second_ul' id='oper" + data[i].depId + "'>"
                        s = s + "                    <li class='depOper' style='line-height: 30px'><span onclick='dep_del(" + data[i].depId + ")'>删除整个部门</span></li>\n";
                        s = s + "                       <li class='depOper' style='line-height: 30px'><span onclick='dep_update(" + data[i].depId + ")' >修改部门</span></li>\n";
                        s = s + "                    <li class='depOper' style='line-height: 30px'><span onclick='pos_add(" + data[i].depId + ")'>新增职位</span></li>\n";
                        s = s + "               </ul>";
                        s = s + "        </li>";
                        s = s + "</ul>";
                    } else if (data[i].positionList.length < 4) {
                        s = s + "    <ul class='first_ul'>\n" +
                            "        <li class='depId' style='line-height: 120px' >" + data[i].depId + "<input type='text' hidden name='depId' value='" + data[i].depId + "'></li>\n" +
                            "        <li class='depName' style='line-height: 120px' ><input class='dep' name='depName' readonly value=" + data[i].depName + "></li>\n";
                        s = s + "<li class='depId'>";
                        s = s + "<ul class='second_ul'>";
                        var a = 120 / data[i].positionList.length;
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            s = s + "    <li class='posId' style='line-height:" + a + "px' >" + data[i].positionList[j].posId + "<input type='text'  name='posId' value='" + data[i].positionList[j].posId + "' hidden></li>\n";
                        }
                        s = s + "</ul>";
                        s = s + "</li>";
                        s = s + "<li class='depId'>";
                        s = s + "<ul class='second_ul'>"
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            s = s + "    <li class='posName' style='line-height:" + a + "px'><input class='dep' name='posName' readonly value=" + data[i].positionList[j].posName + "><span class='del_pos' hidden onclick='deletePos(" + data[i].positionList[j].posId + ")'>删除</span></li>\n";
                        }
                        s = s + "</ul>";
                        s = s + "</li>";
                        s = s + "<li class='oper'>";
                        s = s + "<ul class='second_ul'  id='oper" + data[i].depId + "'>"
                        s = s + "    <li class='depOper' style='line-height: 30px' ><span onclick='dep_del(" + data[i].depId + ")'>删除整个部门</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: 30px'><span onclick='dep_update(" + data[i].depId + ")' >修改部门或职位</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: 30px'><span onclick='pos_del(" + data[i].depId + ")'>删除职位</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: 30px'><span onclick='pos_add(" + data[i].depId + ")'>新增职位</span></li>\n";
                        s = s + "</ul>";
                        s = s + "</li>";
                    } else if (data[i].positionList.length == 4) {
                        s = s + "    <ul class='first_ul'>\n" +
                            "        <li class='depId' style='line-height: 120px' >" + data[i].depId + "<input type='text' hidden name='depId' value='" + data[i].depId + "'></li>\n" +
                            "        <li class='depName' style='line-height: 120px' ><input class='dep' name='depName' readonly value=" + data[i].depName + "></li>\n";
                        s = s + "<li class='depId'>";
                        s = s + "<ul class='second_ul'>";
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            s = s + "    <li class='posId' style='line-height:30px' >" + data[i].positionList[j].posId + "<input type='text'  name='posId' value='" + data[i].positionList[j].posId + "' hidden></li>\n";
                        }
                        s = s + "</ul>";
                        s = s + "</li>";
                        s = s + "<li class='depId'>";
                        s = s + "<ul class='second_ul'>"
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            s = s + "    <li class='posName' style='line-height: 30px'><input class='dep' name='posName' readonly value=" + data[i].positionList[j].posName + "><span class='del_pos' hidden onclick='deletePos(" + data[i].positionList[j].posId + ")'>删除</span></li>\n";
                        }
                        s = s + "</ul>";
                        s = s + "</li>";
                        s = s + "<li class='oper' >";
                        s = s + "<ul class='second_ul'  id='oper" + data[i].depId + "'>"
                        s = s + "    <li class='depOper' style='line-height: 30px' ><span onclick='dep_del(" + data[i].depId + ")'>删除整个部门</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: 30px'><span onclick='dep_update(" + data[i].depId + ")' >修改部门或职位</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: 30px'><span onclick='pos_del(" + data[i].depId + ")'>删除职位</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: 30px'><span onclick='pos_add(" + data[i].depId + ")'>新增职位</span></li>\n";
                        s = s + "</ul>";
                        s = s + "</li>";
                    } else if (data[i].positionList.length > 4) {
                        var b = 30 * data[i].positionList.length;
                        s = s + "    <ul class='first_ul'>\n" +
                            "        <li class='depId' style='line-height: " + b + "px' >" + data[i].depId + "<input type='text' hidden name='depId' value='" + data[i].depId + "'></li>\n" +
                            "        <li class='depName' style='line-height: " + b + "px' ><input class='dep' name='depName' readonly value=" + data[i].depName + "></li>\n";
                        s = s + "<li class='depId'>";
                        s = s + "<ul class='second_ul'>";
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            s = s + "    <li class='posId' style='line-height: 30px' >" + data[i].positionList[j].posId + "<input type='text'  name='posId' value='" + data[i].positionList[j].posId + "' hidden></li>\n";
                        }
                        s = s + "</ul>";
                        s = s + "</li>";
                        s = s + "<li class='depId'>";
                        s = s + "<ul class='second_ul'>"
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            s = s + "    <li class='posName' style='line-height: 30px'><input class='dep' name='posName' readonly value=" + data[i].positionList[j].posName + "><span class='del_pos' style='width: 24px' hidden onclick='deletePos(" + data[i].positionList[j].posId + ")'>删除</span></li>\n";
                        }
                        s = s + "</ul>";
                        s = s + "</li>";
                        s = s + "<li class='oper' >";
                        s = s + "<ul class='second_ul' id='oper" + data[i].depId + "'>"
                        s = s + "    <li class='depOper' style='line-height: " + (b / 4) + "px' ><span onclick='dep_del(" + data[i].depId + ")'>删除整个部门</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: " + (b / 4) + "px'><span onclick='dep_update(" + data[i].depId + ")' >修改部门或职位</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: " + (b / 4) + "px'><span onclick='pos_del(" + data[i].depId + ")'>删除职位</span></li>\n";
                        s = s + "    <li class='depOper' style='line-height: " + (b / 4) + "px'><span onclick='pos_add(" + data[i].depId + ")'>新增职位</span></li>\n";
                        s = s + "</ul>";
                        s = s + "</li>";
                    }
                    s = s + "</div>";
                    s = s + "</form>";
                }
                s = s + "<ul class='last_ul'>";
                s = s + "<li  id='dep_add' onclick='dep_add()'>新增部门</li>";
                s = s + "</ul>";
                $("#right_win").html(s);
            }

        })

    });

    /**
     * 发布培训信息  1.加载发布页面
     */
    $("#create_px").click(function () {

        $("#right_win").load("page/admin/createTrain.jsp");

    });


});

/**
 * 确认更改密码
 *
 */

function sub_update_passwd() {
    $.ajax({
        type:"post",
        url:"updateEmpPasswd",
        data:$("#update_passwd").serialize(),
        success:function (msg) {
            if(msg=="1"){
                alert("原密码输入有误，请重新输入！");
            }else if(msg=="2"){
                alert("更新成功，请重新登录");
               window.location.href="page/employee/login.jsp";
            }else {
                alert("更新失败");
            }
        }
    })
}



/**
 *  发布培训信息 2.选择员工
 *                1> 获取部门列表
 */
function selectEmp() {
    $.ajax({
        type: 'get',
        url: 'depEmpExistList',
        dataType: 'json',
        success: function (data) {
            var dep = "";
            for (var i = 0; i < data.length; i++) {
                dep = dep + "<input type='checkbox' class='depChecked' onclick='depChecked()' name='dep_Name' value='" + data[i].depId + "'>" + data[i].depName + "";
                dep=dep+"<br>";
            }
            $("#pxObjleft").html(dep);
        },
        error:function (data) {
            console.log(data)
        }
    })
}


/**
 *
 *   2> 获取职位列表
 *
 */
function depChecked() {
    var deps = document.getElementsByName("dep_Name");
    var array = new Array();
    var j = 0;
    for (var i = 0; i < deps.length; i++) {
        if (deps[i].checked) {
            array[j] = deps[i].value;
            j++;
        }
    }
    if(array.length==0){
        $("#pxObjmid").html("");
        $("#pxObjright").html("");
    }else {
        $.ajax({
            type: 'get',
            url: 'depEmpExistList',
            dataType: 'json',
            success: function (data) {
                var pos="";
                for (var i = 0; i < data.length; i++) {
                    if(array.contains(data[i].depId)){
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            pos = pos + "<input type='checkbox' class='posChecked' name='pos_Name' onclick='posChecked()' value='"+data[i].positionList[j].posId+"'>"+data[i].positionList[j].posName+"";
                            pos = pos +"<br>";
                        }
                    }

                }
                $("#pxObjmid").html(pos);
            }

        })
    }

}

/**
 *   3>  获取员工列表
 */
function posChecked() {
    var poss = document.getElementsByName("pos_Name");
    var array = new Array();
    var j = 0;
    for (var i = 0; i < poss.length; i++) {
        if (poss[i].checked) {
            array[j] = poss[i].value;
            j++;
        }
    }
    $.ajax({
        type: 'get',
        url: 'depEmpExistList',
        dataType: 'json',
        success: function (data) {
            var emp="";
            for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].positionList.length; j++) {
                        if(array.contains(data[i].positionList[j].posId)){
                            for(var k = 0;k<data[i].positionList[j].employeeList.length;k++){
                                emp = emp + "<input type='checkbox'  name='empId'  value='"+data[i].positionList[j].employeeList[k].empId+"'>"+data[i].positionList[j].employeeList[k].realName+"";
                                emp =emp+"<br>";
                            }
                    }
                }
            }
            $("#pxObjright").html(emp);
        }

    })

}

/**
 * 发布培训信息
 */
function sub_px() {
    $.ajax({
        type:'post',
        url:'addTrain',
        data:$("#pxInfo").serialize(),
        async:true,
        success:function (msg) {
            alert(msg);

        }
    })
}

/**
 *  取消发布培训
 */
function cancel_px() {
    $("#right_win").html("");
}


/**
 * 增加部门时的弹窗事件
 */
function dep_add() {
    $("#unview").css('display', 'block');
    $("#unview").css('z-index', '1000');
    $("#unview").load("page/admin/addDepartmentAndPosition.jsp");
}


/**
 *   删除部门的事件  ajax 异步请求
 * @param n 部门ID
 *
 */
function dep_del(n) {
    if (window.confirm('你确定要删除该部门吗？')) {
        $.ajax({
            type: 'post',
            url: 'dep_del',
            data: 'depId=' + n,
            dataType: 'json',
            success: function (msg) {
                alert(msg.info)
                $("#query_dep").click()
            }
        })
    }
}

/**
 *  更新部门或职位  弹窗事件
 * @param n 部门ID
 */

function dep_update(n) {
    var oper = $("#oper" + n + "");
    var oper_height = oper.height();
    var my_form = $("#" + n + "");
    my_form.find("li[class='depName']").css('background-color', 'white');
    my_form.find("li[class='posName']").css('background-color', 'white');
    my_form.find("input").attr("readOnly", false);
    var p = $("<p class='dep_btn' style='height: " + oper_height + ";margin: 0;background-color: white'><span style='display: inline-block;line-height: " + (oper_height / 16) + "; margin: 0  5px'  onclick='sub_update(" + n + ")'>确认</span><span style='display: inline-block;line-height: " + (oper_height / 16) + ";margin: 0  5px'  onclick='cancel_update(" + n + ")'>取消</span></p>");
    oper.replaceWith(p);
}

/**
 *   确认更新部门和职位信息
 * @param n
 */
function sub_update(n) {
    $.ajax({
        type: "POST",
        url: "updateDepAndPos",
        data: $("#" + n + "").serialize(),
        dataType: 'json',
        success: function (data) {
            alert(data.info);
            $("#unview").css('display', 'none');
            $("#unview").css('z-index', '-1');
            $("#query_dep").click();
        }
    })
}


/**
 * 取消更新
 */
function cancel_update() {
    $("#query_dep").click();
}


/**
 *
 * 删除职位 弹窗
 */
function pos_del(n) {
    var my_form = $("#" + n + "");
    my_form.find(".del_pos").removeAttr('hidden');
    my_form.find("li[class='posName']").css('background-color', 'white');
}

function deletePos(n) {
    if (window.confirm('你确定要删除该职位吗？')) {
        $.ajax({
            type: "POST",
            url: "deletePos",
            data: "posId=" + n,
            success: function (data) {
                alert(data);
                $("#query_dep").click();
            }
        })
    } else {
        $("#query_dep").click();
    }
}


/**
 * 增加某个部门的职位 弹窗
 * @param n  部门ID
 */
function pos_add(n) {
    var depName = $("#" + n + "").find("input[name='depName']").val();
    var s = "<div id='big'>\n" +
        "    <form id='pos' action='addPos' method='post'>\n" +
        "        <div id='small1'>\n" +
        "            <span class='in1'>部门名称</span> <span class='in2'>" + depName + "</span>\n" +
        "            <input type='text' hidden name='departmentId' value='" + n + "'>" +
        "            <hr id='line_1'>\n" +
        "            <ul class='add_position'></ul>\n" +
        "\n" +
        "        </div>\n" +
        "\n" +
        "        <div id='small2'>\n" +
        "            <p><span class='addPos_Btn' onclick='add_oper()'>添加职位（可选）</span></p>\n" +
        "            <span class='btn' onclick='sub_pos()' >确认</span> <input class='btn' type='button' onclick='cancel_dep()' value='取消'>\n" +
        "        </div>\n" +
        "    </form>\n" +
        "</div>"
    $("#unview").css('display', 'block');
    $("#unview").css('z-index', '1000');
    $("#unview").html(s);
}

/**
 *   提交增加职位事件
 */
function sub_pos() {
    $.ajax({
        type: "POST",
        url: "addPos",
        data: $('#pos').serialize(),
        // dataType: 'json',
        success: function (data) {
            console.log(data)
            alert(data);
            $("#unview").css('display', 'none');
            $("#unview").css('z-index', '-1');
            $("#query_dep").click();
        }
    })

}

/**
 *  取消增加部门或者职位事件
 */
function cancel_dep() {
    $("#unview").html("");
    $("#unview").css('display', 'none');
    $("#unview").css('z-index', '-1');
}

/**
 *  增加职位信息弹窗事件
 */
function add_oper() {
    var li = $("<li class='li_1'><span class=\"in1\">职位名称</span><span class=\"in2\"><input type=\"text\" name=\"posName\"></span></li>");
    $(".add_position").append(li);
}


/**
 *
 * 创建新的部门
 *
 **/
function sub_dep() {
    $.ajax({
        type: "POST",
        url: "addDepAndPos",
        data: $('#depAndPos').serialize(),
        dataType: 'json',
        success: function (data) {
            alert(data.info);
            $("#unview").css('display', 'none');
            $("#unview").css('z-index', '-1');
            $("#query_dep").click();
        }
    })
}


/**
 *
 * 更新投递信息状态
 *
 **/

function update_label(n) {
    var text = document.getElementById(n).innerHTML;
    if (text == "查阅") {
        read_resume(n);
        changeStatus(n);
    } else if (text == "录用") {
        hire(n)
    } else if(text=="发送面试邀请"){
        changeStatus(n);
    }

}

function changeStatus(n) {
    var text = document.getElementById(n).innerHTML;
    $.ajax({
        type: 'get',
        url: 'update',
        data: "drId=" + n,
        dataType: 'json',
        success: function (msg) {
            console.log(msg.info)
            if(msg.info == 2){
                alert("发送成功");
            }else if(msg.info==0){
                alert("发送失败");
            }
            if(text!="查阅"){
                $("#query_yp").click();
            }
        }
    })
}


/**
 *
 * 录用员工操作
 *
 **/
function hire(n) {
    $.ajax({
        type: 'get',
        url: 'departmentList',
        data: null,
        dataType: 'json',
        success: function (data) {
            var s = "<div id='big' style='width: 450px;height: 100px;text-align: center' >";
            s = s + "<form id='emp_form' method='post'>";
            s = s + "<div style='float: left;width: 100px' ><input name='resumeId' id='resumeId'  hidden><input readonly style='border: hidden;text-align: center' id='realName' name='realName' ></div>"
            s = s + "<div style='float: left;width: 150px'><select onchange='sel_dep(this.value)' name='depId' id='depId'>"
            s = s + "<option value=''>请选择部门</option>"
            for (var i = 0; i < data.length; i++) {
                s = s + "<option value='" + data[i].depId + "'>" + data[i].depName + "</option>"
            }
            s = s + "</select></div>";
            s = s + "<div id='pos' style='float: left; width: 150px' >";
            s = s + "<select name='positionId'>"
            s = s + "<option id='doselect' value=''>请选择职位</option>"
            s = s + "</select>";
            s = s + "</div>";
            s = s + "<div style='clear: both;padding-top: 30px'><span class='btn' onclick='sub_newEmp("+n+")' >确认</span> <input class='btn' type='button' onclick='cancel_hire()' value='取消'></div> "
            s=s+"</form>";
            s = s+"</div>"
            $("#unview").css('display', 'block');
            $("#unview").css('z-index', '1000');
            $("#unview").css('background-color', 'white');
            $("#unview").html(s);
            console.log( $("#unview"))
            getRes(n);
        }
    })

}

function getRes(n) {
    $.ajax({
        type: 'get',
        url: 'query_resume',
        data: "drId=" + n,
        dataType: 'json',
        success: function (msg) {
            var realName = msg.basicInfo.realName;
            var resumeId = msg.rid;
            $("#resumeId").val(resumeId);
            $("#realName").val(realName);
        }
    })
}

function sel_dep(n) {
    $.ajax({
        type: 'get',
        url: 'departmentList',
        data: null,
        dataType: 'json',
        success: function (data) {
            var s = "";
            for (var i = 0; i < data.length; i++) {
                if (data[i].depId == n) {
                    s = s + "<select name='positionId'>"
                    s = s + "<option id='doselect' value=''>请选择职位</option>"
                    for (var j = 0; j < data[i].positionList.length; j++) {
                        s = s + "<option value='" + data[i].positionList[j].posId + "'>" + data[i].positionList[j].posName + "</option>"
                    }
                    s = s + "</select>";
                }
            }
            $("#pos").html(s);
        }
    })
}

/**
 * 提交录用请求
 */
function sub_newEmp(n) {
    $.ajax({
        type: "POST",
        url: "hireNew",
        data: $('#emp_form').serialize(),
        complete:changeStatus(n),
        success: function (data) {
            alert(data);

            $("#unview").css('display', 'none');
            $("#unview").css('z-index', '-1');
            $("#query_yp").click();
        }
    })
}
function cancel_hire() {
    $("#unview").html("");
    $("#unview").css('display', 'none');
    $("#unview").css('z-index', '-1');
}

/**
 *
 * 查看应聘者简历
 *
 **/
function query_resume(n) {
    var text = document.getElementById(n).innerHTML;
    if (text == "查阅") {
        read_resume(n);
        changeStatus(n);
    }else {
        read_resume(n);
    }

}

function read_resume(n) {
    $.ajax({
        type: 'get',
        url: 'query_resume',
        data: "drId=" + n,
        dataType: 'json',
        success: function (data) {
            var s = "";
            s = s + "<table id='res_view' style='text-align: left '>";
            s = s + "   <tr>";
            s = s + "       <td colspan='5' class='res_title'>基本信息</td>";
            s = s + "   </tr>";
            s = s + "   <tr>";
            s = s + "       <td class='detail_info'>姓名</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.realName + "</td>";
            s = s + "       <td class='detail_info'>性别</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.gender + "</td>";
            s = s + "       <td rowspan='5' class='user_photo'>" + data.basicInfo.photo + "</td>";
            s = s + "   </tr>";

            s = s + "   <tr>";
            s = s + "       <td class='detail_info'>出生日期</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.dateOfBirth + "</td>";
            s = s + "       <td class='detail_info'>手机号码</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.phone + "</td>";
            s = s + "   </tr>";

            s = s + "   <tr>";
            s = s + "       <td class='detail_info'>电子邮箱</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.email + "</td>";
            s = s + "       <td class='detail_info'>户籍</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.huji + "</td>";
            s = s + "   </tr>";

            s = s + "   <tr>";
            s = s + "       <td class='detail_info'>婚姻状况</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.married + "</td>";
            s = s + "       <td class='detail_info'>住址</td>";
            s = s + "       <td class='user_info'>" + data.basicInfo.address + "</td>";
            s = s + "   </tr>";

            s = s + "   <tr>";
            s = s + "       <td class='detail_info' >自我评价</td>";
            s = s + "       <td class='user_info' colspan='3'>" + data.basicInfo.selfEvaluation + "</td>";
            s = s + "   </tr>";

            s = s + "</table>";
            s = s + "<table id='edu_view' style='text-align: center '>";
            if (data.educations.length > 0) {
                s = s + "   <tr>";
                s = s + "       <td colspan='4' class='res_title' style='text-align: left'>教育信息</td>";
                s = s + "   </tr>";
                s = s + "   <tr>";
                s = s + "       <td class='detail_info' >开始时间~结束时间</td>";
                s = s + "       <td class='detail_info'>学校</td>";
                s = s + "       <td class='detail_info'>专业</td>";
                s = s + "       <td class='detail_info'>学历</td>";
                s = s + "   </tr>";
                for (var i = 0; i < data.educations.length; i++) {
                    s = s + "   <tr>";
                    s = s + "       <td class='user_info'>" + data.educations[i].startTime + "~" + data.educations[i].endTime + "</td>";
                    s = s + "       <td class='user_info'>" + data.educations[i].school + "</td>";
                    s = s + "       <td class='user_info'>" + data.educations[i].major + "</td>";
                    s = s + "       <td class='user_info'>" + data.educations[i].degree + "</td>";
                    s = s + "   </tr>";
                }
            }
            if (data.workExperiences.length > 0) {
                s = s + "   <tr>";
                s = s + "       <td colspan='4' class='res_title' style='text-align: left'>工作经验</td>";
                s = s + "   </tr>";
                s = s + "   <tr>";
                s = s + "       <td class='detail_info' >开始时间~结束时间</td>";
                s = s + "       <td class='detail_info'>公司</td>";
                s = s + "       <td class='detail_info'>职位</td>";
                s = s + "       <td class='detail_info'>主要工作内容</td>";
                s = s + "   </tr>";
                for (var i = 0; i < data.workExperiences.length; i++) {
                    s = s + "   <tr>";
                    s = s + "       <td class='user_info'>" + data.workExperiences[i].startDate + "~" + data.workExperiences[i].endDate + "</td>";
                    s = s + "       <td class='user_info'>" + data.workExperiences[i].company + "</td>";
                    s = s + "       <td class='user_info'>" + data.workExperiences[i].position + "</td>";
                    s = s + "       <td class='user_info'>" + data.workExperiences[i].jobContent + "</td>";
                    s = s + "   </tr>";
                }
            }

            if (data.projectExperiences.length > 0) {
                s = s + "   <tr>";
                s = s + "       <td colspan='4' class='res_title' style='text-align: left'>项目经验</td>";
                s = s + "   </tr>";
                s = s + "   <tr>";
                s = s + "       <td class='detail_info'  >项目名</td>";
                s = s + "       <td class='detail_info' colspan='3'>项目内容描述</td>";
                s = s + "   </tr>";
                for (var i = 0; i < data.projectExperiences.length; i++) {
                    s = s + "   <tr>";
                    s = s + "       <td class='user_info'>" + data.projectExperiences[i].projectName + "</td>";
                    s = s + "       <td class='user_info' colspan='3'>" + data.projectExperiences[i].projectDescription + "</td>";
                    s = s + "   </tr>";
                }
            }
            s = s + "<tr>";
            s = s + "<td colspan='4'>";
            s = s + "<a class='btn' onclick='goback()'>返回</a>";
            s = s + "</td>";
            s = s + "</tr>";
            s = s + "</table>";
            $("#right_win").html(s)
            $("#res_view").find("tr,td").css('text-align', 'left');
            $("#edu_view").find("tr,td").css('text-align', 'center');
            $("#edu_view").find(".res_title").css('text-align', 'left');
        }
    })
}


function goback() {
    $("#query_yp").click();
}

/**
 *
 * 提交要发布的招聘信息
 *
 **/
function pub() {
    var recPosition = document.getElementById("recPosition").value;
    var workContent = document.getElementById("workContent").value;
    var recPay = document.getElementById("recPay").value;
    var workAddress = document.getElementById("workAddress").value;
    var otherRequirements = document.getElementById("otherRequirements").value;
    $.ajax({
        type: 'post',
        url: 'publishRecruitment.do',
        data: "recPosition=" + recPosition + "&workContent=" + workContent + "&recPay=" + recPay + "&workAddress=" + workAddress + "&otherRequirements=" + otherRequirements,
        dataType: 'json',
        success: function (msg) {
            alert(msg.info);
            $("#query_rec").click();
        }
    })
}

