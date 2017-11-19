package com.bay.service;


import com.bay.model.WorkAttendance;

import java.util.List;

/**
 * Created by baymax on on 2017-11-06 10:07.
 * No cross no  crown.
 */

public interface WorkAttendanceService {
    /**
     * �ϰ��  �½�һ���򿨼�¼
     * @param
     * @return
     */
    String onWork(Integer empId);

    /**
     * �°�򿨣����´򿨼�¼
     * @param
     * @return
     */
    String offWork(Integer empId);

    List<WorkAttendance> workAttendanceListByCurrMonth(Integer empId);

    List<WorkAttendance> workAttendanceListByLastMonth(Integer empId);


    List<WorkAttendance> currentAllEmpWorkAtt();

    List<WorkAttendance> lastAllEmpWorkAtt();
}
