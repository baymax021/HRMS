package com.bay.service;


import com.bay.model.WorkAttendance;

import java.util.List;

/**
 * Created by baymax on on 2017-11-06 10:07.
 * No cross no  crown.
 */

public interface WorkAttendanceService {
    /**
     * 上班打卡  新建一条打卡记录
     * @param
     * @return
     */
    String onWork(Integer empId);

    /**
     * 下班打卡，更新打卡记录
     * @param
     * @return
     */
    String offWork(Integer empId);

    List<WorkAttendance> workAttendanceListByCurrMonth(Integer empId);

    List<WorkAttendance> workAttendanceListByLastMonth(Integer empId);


    List<WorkAttendance> currentAllEmpWorkAtt();

    List<WorkAttendance> lastAllEmpWorkAtt();
}
