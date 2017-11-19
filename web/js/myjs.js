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



function formatDateLastMonth(date) {
    var y = date.getFullYear();
    var m = date.getMonth();
    if(m==0){
        return (y-1) + '-' + 12 ;
    }
    m = m < 10 ? ('0' + m) : m;
    return y + '-' + m ;
};





/**
 *   格式化月份
 * @param date
 * @returns {number}
 */
function formatDateGetMonth(date) {
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    return m;
};

/**
 *   格式化日期
 * @param date
 * @returns {number}
 */
function formatDateGetDate(date) {
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return d;
};

/**
 *    格式化星期
 * @param date
 * @returns {string}
 */
function formatDateGetDay(date) {
    var w = '日一二三四五六'.charAt(date.getDay());
    return w;
};

/**
 *   格式化 时间  HH:mm:ss
 * @param date
 * @returns {string}
 */
function formatDateGetHourAndMinuties(date) {
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return h + ':' + minute + ':' + second;
};

/**
 *  获取当月的天数
 * @param
 * @returns
 */
function formatDateGetDates(date) {
    var dates = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return dates;
};

/**
 * 获取上个月的天数
 * @param date
 * @returns {number}
 */
function getLastMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    if (month == 0) {
        return (new Date(year - 1 + "-" + 12));
    }
    return (new Date(year + "-" + month));
};


/**
 *
 * @param needle
 * @returns {boolean}
 */
Array.prototype.contains = function (needle) {
    for (var i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}


$(function () {

    /**********管理员*******************/

    $("#zp").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });
    $("#rs").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });

    $("#pc").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });


    $("#px").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });
    $("#xc").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });

    $("#kq").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });

    $("#zz").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });

    $("#main").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });


    /**
     * 游客
     */
    $("#rec_list").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });
    $("#my_resume").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')
        return;
    });
    $("#recordList").click(function () {
        if ($(".second_menu[style*= 'display: block']").prev()[0] != $(this)[0]) {
            hidden_firstMenu()
        }
        $(this).next().css('display', $(this).next().css('display') == 'none' ? 'block' : 'none');
        $(this).css('color', $(this).next().css('display') == 'none' ? 'white' : 'black');
        $(this).css('background-color', $(this).next().css('display') == 'none' ? '#313290' : '#6a76c8')
        $(this).children('div').css('display', $(this).next().css('display') == 'none' ? 'block' : 'none')

    });


    /****游客****/
    $("#my_resume").click(function () {
        var s = "";
        s = s + "<div style='text-align: center;padding-top: 100px'>";
        if ($("#rid").val() != "") {
            s = s + "<span class='resume' >我的简历</span>";
            s = s + "<span class='resume' onclick='view_my_resume()' >预览</span>";
            s = s + "<span  class='resume' onclick='update_my_resume()'>修改</span>";
        } else {
            s = s + "<span id='add_resume' onclick='add_resume()'>新建简历</span>";
        }
        s = s + "</div>";
        $("#right_win").html(s);
    });

    $("#rec_list").click(function () {
        a();
    });

    $("#recordList").click(function () {
        if ($("#rid").val().trim() == "") {
            alert("你还没有简历，请先创建简历");
            $("#my_resume").click();
        } else {
            $.ajax({
                type: 'post',
                url: 'userRecordList',
                data: 'rid=' + $("#rid").val(),
                dataType: 'json',
                success: function (msg) {
                    var s = "";
                    s = s + "<table>";
                    s = s + "<tr>";
                    s = s + "<th>应聘岗位</th>";
                    s = s + "<th>申请状态</th>";
                    s = s + "<th>最近更新时间</th>";
                    s = s + "</tr>";
                    if (msg.length == 0) {
                        s = s + "<tr>";
                        s = s + "<td colspan='3'>你还没有发送过应聘申请</td>";
                        s = s + "</tr>";
                    } else {
                        for (var i = 0; i < msg.length; i++) {
                            s = s + "<tr>";
                            s = s + "<td class='zpxx'>" + msg[i].recruitment.recPosition + "</td>";
                            s = s + "<td class='zpxx'>" + msg[i].label + "</td>";
                            s = s + "<td class='zpxx'>" + formatDate(new Date(msg[i].updateTime.time)) + "</td>";
                            s = s + "<td ><a class='sendresume' onclick='sub_interview(" + msg[i].drId + ")' >" + (msg[i].label == "已邀请" ? "确认面试" : "") + "</a></td>";
                            s = s + "</tr>";
                        }
                    }
                    s = s + "</table>";
                    $("#right_win").html(s);
                }

            })
        }

    });

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
    $("#add_edu").click(function () {
        var s = "<tr>\n" +
            "                <td><input type=\"date\" name=\"startTime\">\n" +
            "                    至 <input type=\"date\" name=\"endTime\"></td>\n" +
            "                <td><input type=\"text\" name=\"school\"></td>\n" +
            "                <td><input type=\"text\" name=\"major\"></td>\n" +
            "                <td><input type=\"text\" name=\"degree\"></td>\n" +
            "            </tr>";
        $("#t_edu").find('tbody').append(s);
    });
    $("#add_work_exp").click(function () {
        var s = " <tr>\n" +
            "                <td><input type=\"date\" name=\"startDate\">\n" +
            "                    至 <input type=\"date\" name=\"endDate\"></td>\n" +
            "                <td><input type=\"text\" name=\"company\"></td>\n" +
            "                <td><input type=\"text\" name=\"position\"></td>\n" +
            "                <td><input type=\"text\" name=\"jobContent\"></td>\n" +
            "            </tr>";
        $("#t_work_exp").find('tbody').append(s);
    });
    $("#add_pro_exp").click(function () {
        var s = "<tr>\n" +
            "               <td><input type=\"text\" name=\"projectName\" style=\"width: 80%\"></td>\n" +
            "               <td colspan=\"3\"><textarea style=\"resize: none;width: 100%;height: 80px\" name=\"projectDescription\"></textarea></td>\n" +
            "           </tr>";
        $("#t_pro_exp").find('tbody').append(s);
    });


    /**
     * 员工查看自己的个人基本信息
     */
    $("#query_pc").click(function () {
        $.ajax({
            type: 'post',
            url: 'mycenter',
            dataType: 'json',
            success: function (data) {
                var bas = data.resume.basicInfo;
                var dep = data.position.department;
                var pos = data.position;
                var s = "";
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
                s = s + "       <td class='user_info'>" + bas.address + "</td>";
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
        var s = "";
        s = s + "<form id='update_passwd'>"
        s = s + "<span class='in'>请输入原密码</span><span class='in'><input type='password' name='old_password'></span><br>"
        s = s + "<span class='in'>请输入新密码</span><span class='in'><input type='password' name='new_password'></span><br>"
        s = s + "<span class='in'>请再次输入新密码</span><span class='in'><input type='password' name='sec_new_password'></span><br>"
        s = s + "<p style='text-align: center ; width: 400px;' >";
        s = s + "<span class='btn' onclick='sub_update_passwd()' >确认</span>";
        s = s + "</p>";
        s = s + "</form>";
        $("#right_win").html(s);
    })


    /**
     * 查看所有员工
     */
    $("#query_emp").click(function () {
        $.ajax({
            type: 'get',
            url: 'allEmployeeList',
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = s + "<table>";
                s = s + "<thead>";
                s = s + "<tr>";
                s = s + "<th>员工编号";
                s = s + "</th>";
                s = s + "<th>姓名";
                s = s + "</th>";
                s = s + "<th>职位";
                s = s + "</th>";
                s = s + "<th>";
                s = s + "<select name='depName' id='depName' onchange='select_dep(this.value)'>" +
                    "    <option value=''>所属部门</option>" +
                    "</select>";
                s = s + "</th>";
                s = s + "<th>在职状态";
                s = s + "</th>";
                s = s + "<th>操作";
                s = s + "</th>";
                s = s + "</tr>";
                s = s + "</thead>";
                s = s + "<tbody>";
                for (var i = 0; i < data.length; i++) {
                    s = s + "<tr>";
                    s = s + "<td class='empinfo'>" + data[i].empId;
                    s = s + "</td>";
                    s = s + "<td class='empinfo'>" + data[i].realName;
                    s = s + "</td>";
                    s = s + "<td class='empinfo'>" + data[i].position.posName;
                    s = s + "</td>";
                    s = s + "<td class='empinfo'>" + data[i].position.department.depName;
                    s = s + "</td>";
                    s = s + "<td class='empinfo'>" + data[i].empStatus;
                    s = s + "</td>";
                    s = s + "<td class='empinfo'>";
                    s = s + (data[i].empStatus == "离职" ? "不可操作" : ("<a onclick='change_emp(" + data[i].empId + ")'>换岗</a>&nbsp;&nbsp;&nbsp;<a onclick='fire_emp(" + data[i].empId + ")'>离职</a>&nbsp;&nbsp;&nbsp;" + (data[i].empStatus == "试用期" ? "<a onclick='be_formal(" + data[i].empId + ")'>转正</a>" : "")));
                    s = s + "</td>";
                    s = s + "</tr>";
                }
                s = s + "</tbody>";
                s = s + "</table>";
                $("#right_win").html(s);
                for (var i = 0; i < deps().length; i++) {
                    var ops = "<option value='" + deps()[i].depId + "'>" + deps()[i].depName + "</option>";
                    $("#depName").append(ops);
                }
            }
        })

    });


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
                    s = s + "<td class='zpxx' >" + date[i].recPosition + "</td>";
                    s = s + "<td class='zpxx'>" + date[i].recPay + "元/月</td>";
                    s = s + "<td class='zpxx'>" + date[i].workContent + "</td>";
                    s = s + "<td class='zpxx'>" + date[i].workAddress + "</td>";
                    s = s + "<td class='zpxx'>" + date[i].otherRequirements + "</td>";
                    s = s + "<td class='zpxx'>" + formatDate(new Date(date[i].createTime.time)) + "</td>";
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
                        s = s + "<td class='zpxx'>" + msg[i].recruitment.recPosition + "</td>";
                        s = s + "<td class='zpxx'>" + formatDate(new Date(msg[i].updateTime.time)) + "</td>";
                        s = s + "<td class='zpxx'>" + msg[i].label + "</td>";
                        s = s + "<td class='zpxx'><a id=" + msg[i].drId + " onclick='update_label(" + msg[i].drId + ")'>" + (msg[i].label == "已投递" ? "查阅" : (msg[i].label == "已查阅" ? "发送面试邀请" : (msg[i].label == "应邀面试" ? "录用" : ""))) + "</a></td>",
                            s = s + "<td class='zpxx'><a onclick='query_resume(" + msg[i].drId + ")'>查看简历</a> </td>";
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
                            s = s + "    <li class='posName' style='line-height:" + a + "px'><input class='dep' name='posName' readonly value=" + data[i].positionList[j].posName + "><span class='del_pos' hidden onclick='deletePos(" + data[i].positionList[j].posId + ")'>&times;</span></li>\n";
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
                            s = s + "    <li class='posName' style='line-height: 30px'><input class='dep' name='posName' readonly value=" + data[i].positionList[j].posName + "><span class='del_pos' hidden onclick='deletePos(" + data[i].positionList[j].posId + ")'>&times;</span></li>\n";
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
                            s = s + "    <li class='posName' style='line-height: 30px'><input class='dep' name='posName' readonly value=" + data[i].positionList[j].posName + "><span class='del_pos' style='width: 24px' hidden onclick='deletePos(" + data[i].positionList[j].posId + ")'>&times;</span></li>\n";
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

    /**
     * 员工首页  main
     */
    $("#main").click(function () {
        var s = "";
        s = s + "<div id=\"currentTime\" style=\"width: 100%;height: 300px;margin: auto;text-align: center; font-size: 50px\">\n" +
            "            </div>";
        s = s + "<div style=\"width: 100%;height: 100px;margin: auto;text-align: center; font-size: 40px\"><span style='margin-right: 50px' onclick='onWork()'>上班</span> <span style='margin-right: 50px' onclick='offWork()'>下班</span></div>";
        $("#right_win").html(s);
        var s1 = "";
        s1 = '<h5>当前时间</h5>' + new Date().toLocaleString() + '星期' + '日一二三四五六'.charAt(new Date().getDay());
        $("#currentTime").html(s1);

        function show_time() {
            var s1 = "";
            s1 = '<h5>当前时间</h5>' + new Date().toLocaleString() + '星期' + '日一二三四五六'.charAt(new Date().getDay());
            $("#currentTime").html(s1);
        }

        setInterval(show_time, 1000);
    });


    /**
     * 查看个人当月考勤记录
     */
    $("#mykq_current").click(function () {
        $.ajax({
            type: 'get',
            url: 'currentWorkAtt',
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = s + "<table style='text-align: left'>";
                s = s + "<tr><td colspan='4' style='text-align: left;border-bottom: 1px solid black'>员工编号:" + $("#empId").val() + "&nbsp;&nbsp;&nbsp;" + formatDateGetMonth(new Date()) + "月份考勤记录</td></tr>";
                s = s + "<tr>";
                s = s + "<td style='text-align: left'>日期</td>";
                s = s + "<td style='text-align: left'>星期</td>";
                s = s + "<td style='text-align: left'>上班</td>";
                s = s + "<td style='text-align: left'>下班</td>";
                s = s + "</tr>";
                if (data.length > 0) {
                    for (var i = 0, j = 0; i < (new Date().getDate()) - 1; i++) {
                        if ((j < (new Date().getDate()) - 1) && (j < data.length) && formatDateGetDate(new Date(data[j].onworkTime.time)) == (i + 1)) {
                            s = s + "<tr>";
                            s = s + "<td style='text-align: left'>" + ((i + 1) < 10 ? ("0" + (i + 1)) : (i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetDay(new Date(new Date().getFullYear(), formatDateGetMonth(new Date()) - 1, i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].onworkTime.time)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].offworkTime.time)) + "</td>";
                            s = s + "</tr>";
                            j++;
                        } else {
                            s = s + "<tr>";
                            s = s + "<td style='text-align: left'>" + ((i + 1) < 10 ? ("0" + (i + 1)) : (i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetDay(new Date(new Date().getFullYear(), formatDateGetMonth(new Date()) - 1, i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>/</td>";
                            s = s + "<td style='text-align: left'>/</td>";
                            s = s + "</tr>";

                        }
                    }
                } else {
                    s = s + "<tr>";
                    s = s + "<td style='text-align: center' colspan='4'>该月没有考勤记录</td>";
                    s = s + "</tr>";

                }

                s = s + "</table>";
                $("#right_win").html(s)
            }
        })

    });

    /**
     * 查看个人上个月考勤记录
     */

    $("#mykq_lastMonth").click(function () {
        $.ajax({
            type: 'get',
            url: 'lastMonthWorkAtt',
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = s + "<table style='text-align: left'>";
                s = s + "<tr><td colspan='4' style='text-align: left;border-bottom: 1px solid black'>员工编号:" + $("#empId").val() + "&nbsp;&nbsp;&nbsp;" + (formatDateGetMonth(new Date()) - 1) + "月份考勤记录</td></tr>";
                s = s + "<tr>";
                s = s + "<td style='text-align: left'>日期</td>";
                s = s + "<td style='text-align: left'>星期</td>";
                s = s + "<td style='text-align: left'>上班</td>";
                s = s + "<td style='text-align: left'>下班</td>";
                s = s + "</tr>";
                if (data.length > 0) {
                    for (var i = 0, j = 0; i < formatDateGetDates(getLastMonth(new Date())); i++) {
                        if (j < data.length && formatDateGetDate(new Date(data[j].onworkTime.time)) == (i + 1)) {
                            s = s + "<tr>";
                            s = s + "<td style='text-align: left'>" + ((i + 1) < 10 ? ("0" + (i + 1)) : (i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetDay(new Date(new Date().getFullYear(), getLastMonth(new Date()).getMonth(), i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].onworkTime.time)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].offworkTime.time)) + "</td>";
                            s = s + "</tr>";
                            j++;
                        } else {
                            s = s + "<tr>";
                            s = s + "<td style='text-align: left'>" + ((i + 1) < 10 ? ("0" + (i + 1)) : (i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>" + formatDateGetDay(new Date(new Date().getFullYear(), getLastMonth(new Date()).getMonth(), i + 1)) + "</td>";
                            s = s + "<td style='text-align: left'>/</td>";
                            s = s + "<td style='text-align: left'>/</td>";
                            s = s + "</tr>";
                        }
                    }

                } else {
                    s = s + "<tr>";
                    s = s + "<td style='text-align: center' colspan='4'>该月没有考勤记录</td>";
                    s = s + "</tr>";

                }
                s = s + "</table>";
                $("#right_win").html(s)
            }
        })
    });

    /**
     * 员工查看自己的已结束培训
     */
    $("#query_px_over").click(function () {
        $.ajax({
            type: 'get',
            url: 'findTrainListDone',
            data: "empId=" + $("#empId").val(),
            dataType: 'json',
            success: function (data) {
                var s = "";
                for (var i = 0; i < data.length; i++) {
                    s = s + "<hr>";
                    s = s + "<table style='width: 100%'>";
                    s = s + "<tr>";
                    s = s + "<th style='height: 40px;width: 150px;text-align: left'>培训主题";
                    s = s + "</th>";
                    s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)' >";
                    s = s + data[i].TTitle;
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训时间";
                    s = s + "</th>";
                    s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    s = s + data[i].TStartTime + "~" + data[i].TEndTime;
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>发布时间";
                    s = s + "</th>";
                    s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    s = s + formatDate(new Date(data[i].trainRecordList[0].createTime.time));
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训对象";
                    s = s + "</th>";
                    s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    for (var j = 0; j < data[i].trainRecordList.length; j++) {
                        s = s + "·" + data[i].trainRecordList[j].employee.realName + "&nbsp;";
                    }
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训内容";
                    s = s + "</th>";
                    s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    s = s + data[i].TContent;
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "</table>";
                    s = s + "<br>";
                }
                $("#right_win").html(s);
            }
        })

    });

    /**
     * 员工查看自己的未开始的培训
     */
    $("#query_px_none").click(function () {
        $.ajax({
            type: 'get',
            url: 'findTrainListNone',
            data: "empId=" + $("#empId").val(),
            dataType: 'json',
            success: function (data) {
                var s = "";
                for (var i = 0; i < data.length; i++) {
                    s = s + "<hr>";
                    s = s + "<table style='width: 100%'>";
                    s = s + "<tr>";
                    s = s + "<th style='height: 40px;width: 150px;text-align: left'>培训主题";
                    s = s + "</th>";
                    s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    s = s + data[i].TTitle;
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训时间";
                    s = s + "</th>";
                    s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    s = s + data[i].TStartTime + "~" + data[i].TEndTime;
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>发布时间";
                    s = s + "</th>";
                    s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    s = s + formatDate(new Date(data[i].trainRecordList[0].createTime.time));
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训对象";
                    s = s + "</th>";
                    s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    for (var j = 0; j < data[i].trainRecordList.length; j++) {
                        s = s + "·" + data[i].trainRecordList[j].employee.realName + "&nbsp;";
                    }
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "<tr>";
                    s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训内容";
                    s = s + "</th>";
                    s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                    s = s + data[i].TContent;
                    s = s + "</td>";
                    s = s + "</tr>";
                    s = s + "</table>";
                    s = s + "<br>";
                }
                $("#right_win").html(s);
            }
        })

    });


    /**
     * 管理员查看已结束培训
     */
    $("#px_over").click(function () {
        $.ajax({
            type: 'get',
            url: 'allTrainListDone',
            dataType: 'json',
            success: function (data) {
                var s = "";
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        s = s + "<hr>";
                        s = s + "<table style='width: 100%'>";
                        s = s + "<tr>";
                        s = s + "<th style='height: 40px;width: 150px;text-align: left'>培训主题";
                        s = s + "</th>";
                        s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + data[i].TTitle;
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训时间";
                        s = s + "</th>";
                        s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + data[i].TStartTime + "~" + data[i].TEndTime;
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>发布时间";
                        s = s + "</th>";
                        s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + formatDate(new Date(data[i].trainRecordList[0].createTime.time));
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训对象";
                        s = s + "</th>";
                        s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        for (var j = 0; j < data[i].trainRecordList.length; j++) {
                            s = s + "·" + data[i].trainRecordList[j].employee.realName + "&nbsp;";
                        }
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训内容";
                        s = s + "</th>";
                        s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + data[i].TContent;
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "</table>";
                        s = s + "<br>";
                    }
                } else {
                    s = "没有培训信息";
                }
                $("#right_win").html(s);
            }
        })

    });

    /**
     * 管理员查看未开始培训
     */
    $("#px_not_start").click(function () {
        $.ajax({
            type: 'get',
            url: 'allTrainListNone',
            dataType: 'json',
            success: function (data) {
                var s = "";
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        s = s + "<hr>";
                        s = s + "<table style='width: 100%'>";
                        s = s + "<tr>";
                        s = s + "<th style='height: 40px;width: 150px;text-align: left'>培训主题";
                        s = s + "</th>";
                        s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + data[i].TTitle;
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训时间";
                        s = s + "</th>";
                        s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + data[i].TStartTime + "~" + data[i].TEndTime;
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>发布时间";
                        s = s + "</th>";
                        s = s + "<td  style='text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + formatDate(new Date(data[i].trainRecordList[0].createTime.time));
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训对象";
                        s = s + "</th>";
                        s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        for (var j = 0; j < data[i].trainRecordList.length; j++) {
                            s = s + "·" + data[i].trainRecordList[j].employee.realName + "&nbsp;";
                        }
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "<tr>";
                        s = s + "<th  style='height: 40px;width: 150px;text-align: left'>培训内容";
                        s = s + "</th>";
                        s = s + "<td  style='height: 40px;text-align: left;background-color:rgba(2, 46, 215, 0.2)'>";
                        s = s + data[i].TContent;
                        s = s + "</td>";
                        s = s + "</tr>";
                        s = s + "</table>";
                        s = s + "<br>";
                    }
                } else {
                    s = "没有培训信息";
                }
                $("#right_win").html(s);
            }
        })

    });

    /**
     * 管理员查看当月考勤记录
     */
    $("#kq_current").click(function () {
        $.ajax({
            type: 'get',
            url: 'currentAllEmpWorkAtt',
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = s + "<table style='text-align: left'>";
                s = s + "<tr><td colspan='7' style='text-align: left;border-bottom: 1px solid black'>" + formatDateGetMonth(new Date()) + "月份考勤记录</td></tr>";
                s = s + "<tr>";
                s = s + "<td style='text-align: left'>日期</td>";
                s = s + "<td style='text-align: left'>星期</td>";
                s = s + "<td style='text-align: left'>上班</td>";
                s = s + "<td style='text-align: left'>下班</td>";
                s = s + "<td style='text-align: left'>员工编号</td>";
                s = s + "<td style='text-align: left'>姓名</td>";
                s = s + "<td style='text-align: left'>所属部门</td>";
                s = s + "</tr>";
                if (data.length > 0) {
                    for (var j = 0; j < data.length; j++) {
                        s = s + "<tr>";
                        s = s + "<td style='text-align: left'>" + formatDateGetDate(new Date(data[j].onworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + formatDateGetDay(new Date(data[j].onworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].onworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].offworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + data[j].employee.empId + "</td>";
                        s = s + "<td style='text-align: left'>" + data[j].employee.realName + "</td>";
                        s = s + "<td style='text-align: left'>" + data[j].employee.position.department.depName + "</td>";
                        s = s + "</tr>";
                    }
                } else {
                    s = s + "<tr>";
                    s = s + "<td style='text-align: center' colspan='7'>该月没有考勤记录</td>";
                    s = s + "</tr>";

                }

                s = s + "</table>";
                $("#right_win").html(s)
            }
        })

    });

    /**
     * 管理员查看上个月考勤记录
     */

    $("#kq_lastMonth").click(function () {
        $.ajax({
            type: 'get',
            url: 'lastAllEmpWorkAtt',
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = s + "<table style='text-align: left'>";
                s = s + "<tr><td colspan='7' style='text-align: left;border-bottom: 1px solid black'>" + (formatDateGetMonth(new Date()) - 1) + "月份考勤记录</td></tr>";
                s = s + "<tr>";
                s = s + "<td style='text-align: left'>日期</td>";
                s = s + "<td style='text-align: left'>星期</td>";
                s = s + "<td style='text-align: left'>上班</td>";
                s = s + "<td style='text-align: left'>下班</td>";
                s = s + "<td style='text-align: left'>员工编号</td>";
                s = s + "<td style='text-align: left'>姓名</td>";
                s = s + "<td style='text-align: left'>所属部门</td>";
                s = s + "</tr>";
                if (data.length > 0) {
                    for (var j = 0; j < data.length; j++) {
                        s = s + "<tr>";
                        s = s + "<td style='text-align: left'>" + formatDateGetDate(new Date(data[j].onworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + formatDateGetDay(new Date(data[j].onworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].onworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + formatDateGetHourAndMinuties(new Date(data[j].offworkTime.time)) + "</td>";
                        s = s + "<td style='text-align: left'>" + data[j].employee.empId + "</td>";
                        s = s + "<td style='text-align: left'>" + data[j].employee.realName + "</td>";
                        s = s + "<td style='text-align: left'>" + data[j].employee.position.department.depName + "</td>";
                        s = s + "</tr>";
                    }
                } else {
                    s = s + "<tr>";
                    s = s + "<td style='text-align: center' colspan='7'>该月没有考勤记录</td>";
                    s = s + "</tr>";

                }

                s = s + "</table>";
                $("#right_win").html(s)
            }
        })

    });

    /****查看自己的工资条*****/

    $("#my_xc_mx").click(function () {
        $.ajax({
            type: 'post',
            url: 'mySalary',
            data:'empId='+$("#empId").val(),
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = s + "<table>";
                s = s + "<tr>";
                s = s + "<th >月份";
                s = s + "</th>";
                s = s + "<th >员工编号";
                s = s + "</th>";
                s = s + "<th >员工姓名";
                s = s + "</th>";
                s = s + "<th >基本工资";
                s = s + "</th>";
                s = s + "<th >绩效工资";
                s = s + "</th>";
                s = s + "<th >社保";
                s = s + "</th>";
                s = s + "<th>其他合计";
                s = s + "</th>";
                s = s + "<th >实发工资（元）";
                s = s + "</th>";
                s = s + "<th>复议";
                s = s + "</th>";
                s = s + "</tr>";
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {

                        s = s + "<tr>";
                        s = s + "<td class='salary'>" + formatDateLastMonth(new Date(data[0].createTime.time));
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].employeeId;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].employee.realName;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].basicSalary;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].meritPay;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].socialSecurity;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].extraMoney;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + (data[i].basicSalary+data[i].meritPay-data[i].socialSecurity+data[i].extraMoney);
                        s = s + "</td>";
                        if(i==0){
                            s = s + "<td class='salary'><span onclick='my_fy(" + data[i].SId + ")'>复议</span>";
                            s = s + "</td>";
                        }
                        s = s + "</tr>";
                    }
                } else {
                    s = s+"<tr>";
                    s = s + "<td class='salary' colspan='7'>该月工资未发";
                    s = s + "</td>";
                    s = s + "</tr>";
                }
                $("#right_win").html(s)
            }
        })
    })


    /****查看最近一个月所有员工的工资***/
    $("#xc_last").click(function () {
        $.ajax({
            type: 'post',
            url: 'allSalaryList',
            dataType: 'json',
            success: function (data) {
                var s = "";
                s = s + "<table>";
                s = s + "<tr>";
                s = s + "<th >"+formatDateLastMonth(new Date(data[0].createTime.time))+"工资表";
                s = s + "</th>";
                s = s + "<tr>";
                s = s + "<tr>";
                s = s + "<th >员工编号";
                s = s + "</th>";
                s = s + "<th >员工姓名";
                s = s + "</th>";
                s = s + "<th >基本工资";
                s = s + "</th>";
                s = s + "<th >绩效工资";
                s = s + "</th>";
                s = s + "<th >社保";
                s = s + "</th>";
                s = s + "<th>其他合计";
                s = s + "</th>";
                s = s + "<th >实发工资（元）";
                s = s + "</th>";
                s = s + "</tr>";
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        s = s + "<tr>";
                        s = s + "<td class='salary'>" + data[i].employeeId;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].employee.realName;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].basicSalary;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].meritPay;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].socialSecurity;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + data[i].extraMoney;
                        s = s + "</td>";

                        s = s + "<td class='salary'>" + (data[i].basicSalary+data[i].meritPay-data[i].socialSecurity+data[i].extraMoney);
                        s = s + "</td>";

                        s = s + "</tr>";
                    }
                } else {
                    s = s+"<tr>";
                    s = s + "<td class='salary' colspan='8'>您还没有工资发放记录";
                    s = s + "</td>";
                    s = s + "</tr>";
                }
                $("#right_win").html(s)
            }
        })
    })


    /*******结算工资******/

    $("#xc_mx").click(function () {
        if (formatDateGetDate(new Date()) <= 15) {
            $.ajax({
                type: 'get',
                url: 'allEmployeeList',
                dataType: 'json',
                success: function (emp) {
                    var rp = null;
                    $.ajax({
                        type: 'post',
                        url: 'findRP',
                        dataType: 'json',
                        async: false,
                        success: function (data) {
                            rp = data;
                        }
                    });
                    var s = "";
                    s = s + "<form id='salary_form' >";
                    s = s + "<table>";
                    s = s + "<tr>";
                    s = s + "<th >员工编号";
                    s = s + "</th>";
                    s = s + "<th >员工姓名";
                    s = s + "</th>";
                    s = s + "<th >基本工资";
                    s = s + "</th>";
                    s = s + "<th >绩效工资";
                    s = s + "</th>";
                    s = s + "<th >社保";
                    s = s + "</th>";
                    s = s + "<th>其他(加班、迟到、早退、旷工等)";
                    s = s + "</th>";
                    s = s + "<th >实发工资（元）";
                    s = s + "</th>";
                    s = s + "</tr>";
                    if (emp.length > 0) {
                        for (var i = 0; i < emp.length; i++) {
                            s = s + "<tr>";
                            s = s + "<td class='salary'><input name='employeeId' readonly style='background: none;border: none;text-align: center;font-size: 15px;width: 80px' value='" + emp[i].empId + "' >";
                            s = s + "</td>";

                            s = s + "<td class='salary'>" + emp[i].realName;
                            s = s + "</td>";

                            s = s + "<td class='salary'><input name='basicSalary' onchange='cbs(" + emp[i].empId + ")'  style='background: none;border: none;text-align: center;font-size: 15px;width: 80px' value='5000.00' >";
                            s = s + "</td>";

                            s = s + "<td class='salary'><input name='meritPay' onchange='cmp(" + emp[i].empId + ")' style='background: none;border: none;text-align: center;font-size: 15px;width: 80px' value='0.00' >";
                            s = s + "</td>";

                            s = s + "<td class='salary'><input name='socialSecurity' onchange='chss(" + emp[i].empId + ")' style='background: none;border: none;text-align: center;font-size: 15px;width: 80px' value='966.00' >";
                            s = s + "</td>";

                            s = s + "<td class='salary' >";
                            var m = 0;
                            if (rp != null && rp.length > 0) {
                                for (var j = 0; j < rp.length; j++) {
                                    if (rp[j].employeeId == emp[i].empId) {
                                        s = s + rp[j].rpType + ":" + (rp[j].num) + "次：<span   class='extra_money'>" + (rp[j].num) * (rp[j].rpType == '加班' ? 100 : (rp[j].rpType == '早退' ? -50 : (rp[j].rpType == '旷工' ? -300 : (rp[j].rpType == '迟到超过30分钟' ? -150 : -50 ) ) ) ) + "</span><br>";
                                        m = m + (rp[j].num) * (rp[j].rpType == '加班' ? 100 : (rp[j].rpType == '早退' ? -50 : (rp[j].rpType == '旷工' ? -300 : (rp[j].rpType == '迟到超过30分钟' ? -150 : -50 ) ) ) );
                                    }
                                }
                            }
                            s = s + "<input hidden value='" + m + "' name='extraMoney'>";
                            s = s + "</td>";
                            s = s + "<td class='salary' name='total_sal' id='" + emp[i].empId + "'>";
                            s = s + "</td>";
                            s = s + "</tr>";
                        }
                    }
                    s = s + "</table>";
                    s = s + "<p id='btn' style='text-align: center;'>";
                    s = s + "<span style='display: inline-block; margin: 0  15px;background-color: #00c1ff;padding: 2px 8px'   onclick='sh_salary()'>审核完毕</span>"
                    s = s + "<span style='display: inline-block; margin: 0  15px;background-color: #00c1ff;padding: 2px 8px'   onclick='sub_salary()'>提交</span>"
                    s = s + "</p>";
                    s = s + "</form>";
                    $("#right_win").html(s);
                }
            })

        } else {
            alert("每个月前15天为工资结算日期，当前不在结算时间")
        }

    });

    /***员工查看自己的复议**/
    $("#my_xc_fy").click(function () {
        $.ajax({
            type:'post',
            url:'myObj',
            data:'empId='+$("#empId").val(),
            dataType:'json',
            success:function (data) {
                var s = "";
                s = s+"<table>";
                s = s+"<tr>";
                s = s+"<th> 复议编号";
                s = s+"</th>";
                s = s+"<th> 复议内容";
                s = s+"</th>";
                s = s+"<th> 当前状态";
                s = s+"</th>";
                s = s+"<th> 处理结果";
                s = s+"</th>";
                s = s+"<th> 创建时间";
                s = s+"</th>";
                s = s+"</tr>";
                if(data.length>0){
                    for(var i =0;i<data.length;i++){
                        s = s+"<tr>";
                        s = s+"<td>"+data[i].obId;
                        s = s+"</td>";
                        s = s+"<td>"+data[i].content;
                        s = s+"</td>";
                        s = s+"<td>"+data[i].status;
                        s = s+"</td>";
                        s = s+"<td>"+data[i].result;
                        s = s+"</td>";
                        s = s+"<td>"+formatDate(new Date(data[i].createTime.time));
                        s = s+"</td>";
                        s = s+"</tr>";

                    }
                }else {
                    s = s+"<tr>";
                    s = s+"<td colspan='5'>暂无复议";
                    s = s+"</td>";
                    s = s+"</tr>";
                }
                s = s+"</table>";
                $("#right_win").html(s);
            }
        })
    })


});

/*********复议***********/
function my_fy(n) {
    var s = "";
    s= s+"<div id='big' style='width: 400px;\n" +
        "    height: 100px;'>";
    s = s+"<form id='fy_form'>"
    s = s +"<span class='in' >请填写复议内容</span>"
    s = s +"<input hidden type='text' name='salaryId' value='"+n+"'>"
    s = s +"<span class='in' ><input type='text' name='content'></span><br><br>"
    s = s+"<span class='btn' onclick='sub_fy()' >确认</span><input class='btn' type='button' onclick='cancel_dep()' value='取消'>";
    s = s+"</form>";
    s = s+"</div>";
    $("#unview").css('display', 'block');
    $("#unview").css('z-index', '1000');
    $("#unview").html(s);
}
function sub_fy() {
    $.ajax({
        type: "POST",
        url: "addObj",
        data: $('#fy_form').serialize(),
        success: function (data) {
            alert(data);
            $("#unview").css('display', 'none');
            $("#unview").css('z-index', '-1');
            $("#my_xc_fy").click();
        }
    })
}

function sh_salary() {
    var totals = document.getElementsByName("total_sal");
    for (var i = 0; i < totals.length; i++) {
        var basicSalary = totals[i].previousSibling.previousSibling.previousSibling.previousSibling.firstChild.value;
        var meritPay = totals[i].previousSibling.previousSibling.previousSibling.firstChild.value;
        var socialSecurity = totals[i].previousSibling.previousSibling.firstChild.value;
        var rp = totals[i].previousSibling.lastChild.value;
        totals[i].innerHTML = (basicSalary - (-meritPay) - socialSecurity - (-rp));
    }
}

function sub_salary() {
    $.ajax({
        type: 'post',
        url: 'addSalary',
        data: $("#salary_form").serialize(),
        success: function (info) {
            alert(info);
            $("#btn").html("");
            $(":input").attr("readonly", true);
        }
    })
}


function cbs(n) {
    var total_salary = document.getElementById(n);
    var basicSalary = total_salary.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.value;
    var meritPay = total_salary.previousSibling.previousSibling.previousSibling.firstChild.value;
    var socialSecurity = total_salary.previousSibling.previousSibling.firstChild.value;
    var rp = total_salary.previousSibling.lastChild.value;
    total_salary.innerHTML = (basicSalary - (-meritPay) - socialSecurity - (-rp));
}

function cmp(n) {
    var total_salary = document.getElementById(n);
    var basicSalary = total_salary.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.value;
    var meritPay = total_salary.previousSibling.previousSibling.previousSibling.firstChild.value;
    var socialSecurity = total_salary.previousSibling.previousSibling.firstChild.value;
    var rp = total_salary.previousSibling.lastChild.value;
    total_salary.innerHTML = (basicSalary - (-meritPay) - socialSecurity - (-rp));
}

function chss(n) {
    var total_salary = document.getElementById(n);
    var basicSalary = total_salary.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.value;
    var meritPay = total_salary.previousSibling.previousSibling.previousSibling.firstChild.value;
    var socialSecurity = total_salary.previousSibling.previousSibling.firstChild.value;
    var rp = total_salary.previousSibling.lastChild.value;
    total_salary.innerHTML = (basicSalary - (-meritPay) - socialSecurity - (-rp));
}

/***获取部门***/
function deps() {
    var msg = null;
    $.ajax({
        type: 'get',
        url: 'depsAndEmployees',
        dataType: 'json',
        async: false,
        success: function (data) {
            msg = data;
        }
    })
    return msg;
}

/*********下拉菜单选择部门***********/
function select_dep(n) {
    if (n == "") {
        $("#query_emp").click();
    } else {
        for (var i = 0; i < deps().length; i++) {
            if (deps()[i].depId == n) {
                var dep = deps()[i];
                var s = "";
                for (var j = 0; j < dep.positionList.length; j++) {
                    var pos = dep.positionList[j];
                    for (var k = 0; k < pos.employeeList.length; k++) {
                        var emp = pos.employeeList[k];
                        s = s + "<tr>";
                        s = s + "<td class='empinfo'>" + emp.empId;
                        s = s + "</td>";
                        s = s + "<td class='empinfo'>" + emp.realName;
                        s = s + "</td>";
                        s = s + "<td class='empinfo'>" + pos.posName;
                        s = s + "</td>";
                        s = s + "<td class='empinfo'>" + dep.depName;
                        s = s + "</td>";
                        s = s + "<td class='empinfo'>" + emp.empStatus;
                        s = s + "</td>";
                        s = s + "<td class='empinfo'>";
                        s = s + (emp.empStatus == "离职" ? "不可操作" : ("<a onclick='change_emp(" + emp.empId + ")'>换岗</a>&nbsp;&nbsp;&nbsp;<a onclick='fire_emp(" + emp.empId + ")'>离职</a>&nbsp;&nbsp;&nbsp;" + (emp.empStatus == "试用期" ? "<a onclick='fire_emp(" + emp.empId + ")'>转正</a>" : "")));
                        s = s + "</td>";
                        s = s + "</tr>";
                    }

                }
                var tbody = document.getElementsByTagName("tbody")[0];
                tbody.innerHTML = s;

            }
        }
    }

}

/****转正****/
function be_formal(n) {
    $.ajax({
        type: 'get',
        url: 'empTurnFormal',
        data: 'empId=' + n,
        success: function (info) {
            alert(info);
            $("#query_emp").click();
        }
    })
}


/****离职****/
function fire_emp(n) {
    $.ajax({
        type: 'get',
        url: 'fireEmployee',
        data: 'empId=' + n,
        success: function (info) {
            alert(info);
            $("#query_emp").click();
        }
    })
}


/****换岗****/
function change_emp(n) {
    var infos = document.getElementsByClassName("empinfo");
    var realName;
    var depName;
    var posName;
    for (var i = 0; i < infos.length; i++) {
        if (infos[i].innerHTML == n) {
            var emp = infos[i];
            realName = emp.nextSibling.innerHTML;
            posName = emp.nextSibling.nextSibling.innerHTML;
            depName = emp.nextSibling.nextSibling.nextSibling.innerHTML;
        }
    }
    $.ajax({
        type: 'get',
        url: 'departmentList',
        data: null,
        dataType: 'json',
        success: function (data) {
            var s = "<div id='big' style='width: 450px;height: 130px;text-align: center' >";
            s = s + "<form id='change_emp_form' >";
            s = s + "<div style='float: left;width: 100px' ><input name='empId' value='" + n + "'  hidden><input readonly style='border: hidden;text-align: center;background: none' value='" + realName + "' name='realName' ></div>"
            s = s + "<div style='float: left;width: 150px'><input readonly style='border: hidden;text-align: center;background: none' value='" + depName + "' name='depName' ></div>";
            s = s + "<div style='float: left;width: 150px'><input readonly style='border: hidden;text-align: center;background: none' value='" + posName + "' name='posName' ></div>";
            s = s + "<br><hr>";
            s = s + "<div style='float: left;width: 100px;height: 10px' ></div>";
            s = s + "<div style='float: left;width: 150px'><select onchange='sel_dep(this.value)' name='depId' id='depId'>"
            s = s + "<option value=''>请选择部门</option>";
            for (var i = 0; i < data.length; i++) {
                s = s + "<option value='" + data[i].depId + "'>" + data[i].depName + "</option>"
            }
            s = s + "</select></div>";
            s = s + "<div id='pos' style='float: left; width: 150px' >";
            s = s + "<select name='positionId'>"
            s = s + "<option id='doselect' value=''>请选择职位</option>"
            s = s + "</select>";
            s = s + "</div>";
            s = s + "<div style='clear: both;padding-top: 30px'><span class='btn' onclick='sub_change_emp(" + n + ")' >确认</span> <input class='btn' type='button' onclick='cancel_hire()' value='取消'></div> "
            s = s + "</form>";
            s = s + "</div>"
            $("#unview").css('display', 'block');
            $("#unview").css('z-index', '1000');
            $("#unview").css('background-color', 'white');
            $("#unview").html(s);

        }
    })
}


function sub_change_emp(n) {
    $.ajax({
        type: "POST",
        url: "changeEmp",
        data: $('#change_emp_form').serialize(),
        success: function (data) {
            alert(data);
            $("#unview").css('display', 'none');
            $("#unview").css('z-index', '-1');
            $("#query_emp").click();
        }
    })
}


function hidden_firstMenu() {
    $(".second_menu[style*= 'display: block']").prev().css('color', 'white');
    $(".second_menu[style*= 'display: block']").prev().css('background-color', '#313290')
    $(".second_menu[style*= 'display: block']").prev().children('div').css('display', 'block')
    $(".second_menu[style*= 'display: block']").css('display', 'none');
}

/**
 *  预览自己的简历
 */
function view_my_resume() {
    $.ajax({
        type: 'post',
        url: 'my_resume',
        data: 'rid=' + $("#rid").val(),
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
            s = s + "       <td class='user_info'>" + (data.basicInfo.gender == 'male' ? '男' : '女') + "</td>";
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
            s = s + "<a class='btn' onclick='yk_goback()'>返回</a>";
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

/***返回**/
function yk_goback() {
    $("#my_resume").click();
    $("#my_resume").click();
}

/**
 *   更新简历
 */
function update_my_resume() {
    $.ajax({
        type: 'post',
        url: 'my_resume',
        data: 'rid=' + $("#rid").val(),
        dataType: 'json',
        success: function (data) {
            var s = "<form action='addResume' method='post' onsubmit='' id='my_res_form'>" +
                "        <h3 id='basic'>基本信息</h3>" +
                "        <hr>\n" +
                "        <div id=\"basicInfo\">\n" +
                "            <input type=\"text\" name=\"candidateId\" value=\"${candidate.cid}\" hidden>\n" +
                "\n" +
                "            <p>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>真实姓名</span><span class=\"res_bas\"><input type=\"text\" value = " + data.basicInfo.realName + " id=\"realName\"\n" +
                "                                                                                                         name=\"realName\"\n" +
                "                                                                                                        ></span>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>性别：<input type=\"radio\" name=\"gender\" value=\"male\" " + (data.basicInfo.gender == 'male' ? 'checked' : null) + " >男\n" +
                "                    <input type=\"radio\" name=\"gender\" value=\"female\"  " + (data.basicInfo.gender == 'male' ? null : 'checked') + ">女</span>\n" +
                "            </p>\n" +
                "            <p>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>出生日期：</span><span class=\"res_bas\"><input type=\"date\"  value = " + (data.basicInfo.dateOfBirth ) + " \t\n" +
                "                                                                                                          name=\"dataOfBirth\"></span>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>手机号码：</span><span class=\"res_bas\"><input type=\"text\"  value = " + data.basicInfo.phone + " \n" +
                "                                                                                                          name=\"phone\"></span>\n" +
                "            </p>\n" +
                "            <p>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>电子邮箱：</span><span class=\"res_bas\"><input type=\"email\"  value = " + data.basicInfo.email + "  \n" +
                "                                                                                                          name=\"email\"></span>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>户籍：</span><span class=\"res_bas\"><input type=\"text\" value=" + data.basicInfo.huji + "  \n" +
                "                                                                                                        name=\"huji\"></span>\n" +
                "            </p>\n" +
                "            <p>\n" +
                "                <span class=\"res_bas\"> <span class=\"need\">*</span>住址：</span><span class=\"res_bas\"><input type=\"text\" value = " + data.basicInfo.address + "  \n" +
                "                                                                                                         name=\"address\"></span>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>婚姻状况：</span><span class=\"res_bas\"><input type=\"text\"  value = " + data.basicInfo.married + "  \n" +
                "                                                                                                          name=\"married\"></span>\n" +
                "            </p>\n" +
                "            <p>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>自我评价：</span>\n" +
                "                <textarea name=\"selfEvaluation\" cols=\"60\" rows=\"3\" value = " + data.basicInfo.selfEvaluation + " style=\"resize: none\"></textarea>\n" +
                "                <span class=\"res_bas\"><span class=\"need\">*</span>上传头像：</span><span class=\"res_bas\"><input type=\"file\"\n" +
                "                                                                                                          name=\"photo\" value = " + data.basicInfo.photo + " ></span>\n" +
                "            </p>\n" +
                "            <p style=\"text-align: center\">\n" +
                "                <input type=\"button\" id=\"save_basic\" value=\"保存\">\n" +
                "                <input type=\"reset\" id=\"res\" value=\"重置\">\n" +
                "            </p>\n" +
                "        </div>\n" +
                "\n";
            if (data.educations.length > 0) {
                s = s + "        <h3 id=\"edu\">教育经历</h3>\n" +
                    "        <hr>\n" +
                    "        <table id=\"t_edu\" hidden width=\"90%\">\n" +
                    "            <thead>\n" +
                    "            <tr>\n" +
                    "                <th>就读时间</th>\n" +
                    "                <th>学校名称</th>\n" +
                    "                <th>所学专业</th>\n" +
                    "                <th>学历</th>\n" +
                    "            </tr>\n" +
                    "            </thead>\n" +
                    "            <tbody>\n";
                for (var i = 0; i < data.educations.length; i++) {
                    s = s + "   <tr>";
                    s = s + "       <td class='user_info'>" + data.educations[i].startTime + "~" + data.educations[i].endTime + "</td>";
                    s = s + "       <td class='user_info'>" + data.educations[i].school + "</td>";
                    s = s + "       <td class='user_info'>" + data.educations[i].major + "</td>";
                    s = s + "       <td class='user_info'>" + data.educations[i].degree + "</td>";
                    s = s + "   </tr>";
                }

                s = s + "            <tfoot>\n" +
                    "            <tr>\n" +
                    "            <td colspan=\"4\">\n" +
                    "                <input type=\"button\" id=\"add_edu\" value=\"继续添加教育信息\">\n" +
                    "                <input type=\"button\" id=\"save_edu\" value=\"保存\">\n" +
                    "            </td>\n" +
                    "            </tr>\n" +
                    "            </tfoot>\n" +
                    "        </table>\n";
            }

            s = s + "        <h3 id=\"work_exp\"> 工作经历</h3>\n" +
                "        <hr>\n" +
                "        <table id=\"t_work_exp\" hidden width=\"90%\">\n" +
                "            <thead>\n" +
                "            <tr>\n" +
                "                <th>时间</th>\n" +
                "                <th>公司名称</th>\n" +
                "                <th>职位</th>\n" +
                "                <th>主要工作内容</th>\n" +
                "            </tr>\n" +
                "            </thead>\n" +
                "            <tbody>\n" +
                "            <tr>\n" +
                "                <td><input type=\"date\" name=\"startDate\">\n" +
                "                    至 <input type=\"date\" name=\"endDate\"></td>\n" +
                "                <td><input type=\"text\" name=\"company\"></td>\n" +
                "                <td><input type=\"text\" name=\"position\"></td>\n" +
                "                <td><input type=\"text\" name=\"jobContent\"></td>\n" +
                "            </tr>\n" +
                "            </tbody>\n" +
                "            <tfoot>\n" +
                "            <tr>\n" +
                "            <td colspan=\"4\">\n" +
                "                <input type=\"button\" id=\"add_work_exp\" value=\"继续添加工作经历\">\n" +
                "\n" +
                "                <input type=\"button\" id=\"save_work_exp\" value=\"保存\">\n" +
                "            </td>\n" +
                "            </tr>\n" +
                "            </tfoot>\n" +
                "        </table>\n" +
                "\n" +
                "        <h3 id=\"pro_exp\"> 项目经验</h3>\n" +
                "        <hr>\n" +
                "        <table id=\"t_pro_exp\" hidden width=\"90%\">\n" +
                "            <thead>\n" +
                "            <tr>\n" +
                "                <th colspan=\"1\">项目名称</th>\n" +
                "                <th colspan=\"3\">项目描述</th>\n" +
                "            </tr>\n" +
                "            </thead>\n" +
                "           <tbody>\n" +
                "           <tr>\n" +
                "               <td><input type=\"text\" name=\"projectName\" style=\"width: 80%\"></td>\n" +
                "               <td colspan=\"3\"><textarea style=\"resize: none;width: 100%;height: 80px\" name=\"projectDescription\"></textarea></td>\n" +
                "           </tr>\n" +
                "           </tbody>\n" +
                "            <tfoot>\n" +
                "            <tr>\n" +
                "            <td colspan=\"4\">\n" +
                "                <input type=\"button\" id=\"add_pro_exp\" value=\"继续添加项目经历\">\n" +
                "                <input type=\"button\" id=\"save_pro_exp\" value=\"保存\">\n" +
                "            </td>\n" +
                "            </tr>\n" +
                "            </tfoot>\n" +
                "        </table>\n" +
                "        <p style=\"text-align: center;\">\n" +
                "\n" +
                "        <input type=\"submit\" value=\"保存简历\" style=\"font-size: 20px;border-radius: 2px;background: none;border: 1px solid gray;\">\n" +
                "        </p>\n" +
                "    </form>";
            s = s + "<script>" +
                "$(\"#save_basic\").click(function () {\n" +
                "    $(\"#basicInfo\").attr(\"hidden\", 'hidden');\n" +
                "});" + "$(\"#save_basic\").click(function () {\n" +
                "        $(\"#basicInfo\").attr(\"hidden\", 'hidden');\n" +
                "    });\n" +
                "    \n" +
                "    $(\"#basic\").click(function () {\n" +
                "        $(\"#basicInfo\").removeAttr(\"hidden\");\n" +
                "    });\n" +
                "    $(\"#edu\").click(function () {\n" +
                "        $(\"#t_edu\").removeAttr(\"hidden\");\n" +
                "    });\n" +
                "    $(\"#save_edu\").click(function () {\n" +
                "        $(\"#t_edu\").attr(\"hidden\", 'hidden');\n" +
                "    });\n" +
                "\n" +
                "    $(\"#work_exp\").click(function () {\n" +
                "        $(\"#t_work_exp\").removeAttr(\"hidden\");\n" +
                "    });\n" +
                "    $(\"#save_work_exp\").click(function () {\n" +
                "        $(\"#t_work_exp\").attr(\"hidden\", 'hidden');\n" +
                "    });\n" +
                "\n" +
                "    $(\"#pro_exp\").click(function () {\n" +
                "        $(\"#t_pro_exp\").removeAttr(\"hidden\");\n" +
                "    });\n" +
                "    $(\"#save_pro_exp\").click(function () {\n" +
                "        $(\"#t_pro_exp\").attr(\"hidden\", 'hidden');\n" +
                "    });\n" +
                "    $(\"#add_edu\").click(function () {\n" +
                "        var s = \"<tr>\\n\" +\n" +
                "            \"                <td><input type=\\\"date\\\" name=\\\"startTime\\\">\\n\" +\n" +
                "            \"                    至 <input type=\\\"date\\\" name=\\\"endTime\\\"></td>\\n\" +\n" +
                "            \"                <td><input type=\\\"text\\\" name=\\\"school\\\"></td>\\n\" +\n" +
                "            \"                <td><input type=\\\"text\\\" name=\\\"major\\\"></td>\\n\" +\n" +
                "            \"                <td><input type=\\\"text\\\" name=\\\"degree\\\"></td>\\n\" +\n" +
                "            \"            </tr>\";\n" +
                "        $(\"#t_edu\").find('tbody').append(s);\n" +
                "    });\n" +
                "    $(\"#add_work_exp\").click(function () {\n" +
                "        var s = \" <tr>\\n\" +\n" +
                "            \"                <td><input type=\\\"date\\\" name=\\\"startDate\\\">\\n\" +\n" +
                "            \"                    至 <input type=\\\"date\\\" name=\\\"endDate\\\"></td>\\n\" +\n" +
                "            \"                <td><input type=\\\"text\\\" name=\\\"company\\\"></td>\\n\" +\n" +
                "            \"                <td><input type=\\\"text\\\" name=\\\"position\\\"></td>\\n\" +\n" +
                "            \"                <td><input type=\\\"text\\\" name=\\\"jobContent\\\"></td>\\n\" +\n" +
                "            \"            </tr>\";\n" +
                "        $(\"#t_work_exp\").find('tbody').append(s);\n" +
                "    });\n" +
                "    $(\"#add_pro_exp\").click(function () {\n" +
                "        var s = \"<tr>\\n\" +\n" +
                "            \"               <td><input type=\\\"text\\\" name=\\\"projectName\\\" style=\\\"width: 80%\\\"></td>\\n\" +\n" +
                "            \"               <td colspan=\\\"3\\\"><textarea style=\\\"resize: none;width: 100%;height: 80px\\\" name=\\\"projectDescription\\\"></textarea></td>\\n\" +\n" +
                "            \"           </tr>\";\n" +
                "        $(\"#t_pro_exp\").find('tbody').append(s);\n" +
                "    });\n"
            "</script>"
            $("#right_win").html(s)


        }
    })

}


/**
 * 创建简历
 */
function add_resume() {
    $("#right_win").load("page/candidate/addresume.jsp");
}

function sub_interview(n) {
    $.ajax({
        type: 'get',
        url: 'sub_int',
        data: 'drId=' + n,
        dataType: 'json',
        success: function (msg) {
            alert(msg.info);
            $("#recordList").click();
        }
    })
}

function a() {
    $.ajax({
        type: 'post',
        url: 'recruitmentList',
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
            s = s + "<th>申请</th>";
            s = s + "</tr>";
            for (var i = 0; i < date.length; i++) {
                s = s + "<tr>";
                s = s + "<td class='zpxx'>" + date[i].recPosition + "</td>";
                s = s + "<td class='zpxx'>" + date[i].recPay + "元/月</td>";
                s = s + "<td class='zpxx'>" + date[i].workContent + "</td>";
                s = s + "<td class='zpxx'>" + date[i].workAddress + "</td>";
                s = s + "<td class='zpxx'>" + date[i].otherRequirements + "</td>";
                s = s + "<td class='zpxx'>" + formatDate(new Date(date[i].createTime.time)) + "</td>";
                s = s + "<td class='sendresume'><a onclick='send(" + date[i].recId + ")' >发送简历</a></td>";
                s = s + "</tr>"
            }
            s = s + "</table>";
            $("#right_win").html(s);
        }
    })
}

function send(n) {
    if ($("#rid").val() == "") {
        alert("请先创建简历");
        $("#my_resume").click();
    } else {
        $.ajax({
            type: 'post',
            url: 'send',
            data: 'resumeId=' + $("#rid").val() + '&recruitmentId=' + n,
            dataType: 'json',
            success: function (date) {
                alert(date.info);
                $("#recordList").click();
            }
        })
    }
}


/**
 *   上班打卡
 */
function onWork() {
    $.ajax({
        type: 'get',
        url: 'onWork',
        success: function (msg) {
            alert(msg);
        }
    })
}

function offWork() {
    var password = window.prompt("请输入登录密码", "")
    if (password.trim() != "") {
        $.ajax({
            type: 'get',
            url: 'offWork',
            data: 'password=' + password,
            success: function (msg) {
                alert(msg);
            }
        })
    } else {
        alert("密码不能为空")
    }

}

/**
 * 确认更改密码
 *
 */

function sub_update_passwd() {
    $.ajax({
        type: "post",
        url: "updateEmpPasswd",
        data: $("#update_passwd").serialize(),
        success: function (msg) {
            if (msg == "1") {
                alert("原密码输入有误，请重新输入！");
            } else if (msg == "2") {
                alert("更新成功，请重新登录");
                window.location.href = "page/employee/login.jsp";
            } else {
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
                dep = dep + "<br>";
            }
            $("#pxObjleft").html(dep);
        },
        error: function (data) {
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
    if (array.length == 0) {
        $("#pxObjmid").html("");
        $("#pxObjright").html("");
    } else {
        $.ajax({
            type: 'get',
            url: 'depEmpExistList',
            dataType: 'json',
            success: function (data) {
                var pos = "";
                for (var i = 0; i < data.length; i++) {
                    if (array.contains(data[i].depId)) {
                        for (var j = 0; j < data[i].positionList.length; j++) {
                            pos = pos + "<input type='checkbox' class='posChecked' name='pos_Name' onclick='posChecked()' value='" + data[i].positionList[j].posId + "'>" + data[i].positionList[j].posName + "";
                            pos = pos + "<br>";
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
            var emp = "";
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].positionList.length; j++) {
                    if (array.contains(data[i].positionList[j].posId)) {
                        for (var k = 0; k < data[i].positionList[j].employeeList.length; k++) {
                            emp = emp + "<input type='checkbox'  name='empId'  value='" + data[i].positionList[j].employeeList[k].empId + "'>" + data[i].positionList[j].employeeList[k].realName + "";
                            emp = emp + "<br>";
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
        type: 'post',
        url: 'addTrain',
        data: $("#pxInfo").serialize(),
        async: true,
        success: function (msg) {
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
        "    <form id='pos' >\n" +
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
    } else if (text == "发送面试邀请") {
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
            if (msg.info == 2) {
                alert("发送成功");
            } else if (msg.info == 0) {
                alert("发送失败");
            }
            if (text != "查阅") {
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
            s = s + "<div style='clear: both;padding-top: 30px'><span class='btn' onclick='sub_newEmp(" + n + ")' >确认</span> <input class='btn' type='button' onclick='cancel_hire()' value='取消'></div> "
            s = s + "</form>";
            s = s + "</div>"
            $("#unview").css('display', 'block');
            $("#unview").css('z-index', '1000');
            $("#unview").css('background-color', 'white');
            $("#unview").html(s);
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
        complete: changeStatus(n),
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
    } else {
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
            s = s + "       <td class='user_info'>" + (data.basicInfo.gender == 'male' ? '男' : '女') + "</td>";
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

