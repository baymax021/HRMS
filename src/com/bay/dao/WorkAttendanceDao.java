package com.bay.dao;


import com.bay.model.WorkAttendance;

import java.util.List;

/**
 * Created by baymax on on 2017-11-06 09:57.
 * No cross no  crown.
 */

public interface WorkAttendanceDao {
    boolean addWorkAttendance(WorkAttendance workAttendance);
    boolean updateWorkAttendance(WorkAttendance workAttendance);

    WorkAttendance queryWorkAttendance(WorkAttendance workAttendance);

    List<WorkAttendance> workAttendanceListByCurrMonth(WorkAttendance workAttendance);

    List<WorkAttendance> workAttendanceListByLastMonth(WorkAttendance workAttendance);

    List<WorkAttendance> currentAllEmpWorkAtt(WorkAttendance workAttendance);

    List<WorkAttendance> lastAllEmpWorkAtt(WorkAttendance workAttendance);
}
