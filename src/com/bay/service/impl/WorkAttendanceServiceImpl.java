package com.bay.service.impl;


import com.bay.dao.WorkAttendanceDao;
import com.bay.model.WorkAttendance;
import com.bay.service.WorkAttendanceService;
import com.bay.util.MyDateFormat;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;

/**
 * @author baymax on
 * @date 2017-11-06 10:07
 * No cross no  crown.
 */
@Service
@Transactional
public class WorkAttendanceServiceImpl implements WorkAttendanceService {
    @Resource
    private WorkAttendanceDao workAttendanceDao;

    @Override
    public String onWork(Integer empId) {
        Timestamp timestamp = MyDateFormat.dateFormatDate();
        System.out.println(timestamp);
        WorkAttendance workAttendance = new WorkAttendance();
        workAttendance.setOnworkTime(timestamp);
        workAttendance.setEmployeeId(empId);
        WorkAttendance workAttendance1 = workAttendanceDao.queryWorkAttendance(workAttendance);
        System.out.println(workAttendance1);
        if (workAttendance1 == null) {
            workAttendance.setOnworkTime(new Timestamp(System.currentTimeMillis()));
            boolean b = workAttendanceDao.addWorkAttendance(workAttendance);
            if (b) {
                return "打卡成功！";
            }
            return "打卡失败！";
        } else {
            return "您已经打过上班卡！";
        }
    }

    @Override
    public String offWork(Integer empId) {
        Timestamp timestamp = MyDateFormat.dateFormatDate();
        WorkAttendance workAttendance = new WorkAttendance();
        workAttendance.setOnworkTime(timestamp);
        workAttendance.setEmployeeId(empId);
        workAttendance = workAttendanceDao.queryWorkAttendance(workAttendance);
        if (workAttendance == null) {
            return "您还没有打上班卡！";
        } else {
            if(workAttendance.getOffworkTime() == null){
                System.out.println(workAttendance);
                workAttendance.setOffworkTime(new Timestamp(System.currentTimeMillis()));

                System.out.println(workAttendance);
                boolean b = workAttendanceDao.updateWorkAttendance(workAttendance);
                if (b) {
                    return "打卡成功！";
                }
                return "打卡失败！";
            }else {
                return "您已经打过下班卡！";
            }

        }
    }

    @Override
    public List<WorkAttendance> workAttendanceListByCurrMonth(Integer empId) {
        Timestamp timestamp = MyDateFormat.dateFormatMonth();
        WorkAttendance workAttendance = new WorkAttendance();
        workAttendance.setOnworkTime(timestamp);
        workAttendance.setEmployeeId(empId);
        return workAttendanceDao.workAttendanceListByCurrMonth(workAttendance);
    }

    @Override
    public List<WorkAttendance> workAttendanceListByLastMonth(Integer empId) {
        Timestamp timestamp = MyDateFormat.dateFormatLastMonth();
        WorkAttendance workAttendance = new WorkAttendance();
        workAttendance.setOnworkTime(timestamp);
        workAttendance.setEmployeeId(empId);
        return workAttendanceDao.workAttendanceListByLastMonth(workAttendance);
    }

    @Override
    public List<WorkAttendance> currentAllEmpWorkAtt() {
        Timestamp timestamp = MyDateFormat.dateFormatMonth();
        WorkAttendance workAttendance = new WorkAttendance();
        workAttendance.setOnworkTime(timestamp);
        return workAttendanceDao.currentAllEmpWorkAtt(workAttendance);
    }

    @Override
    public List<WorkAttendance> lastAllEmpWorkAtt() {
        Timestamp timestamp = MyDateFormat.dateFormatLastMonth();
        WorkAttendance workAttendance = new WorkAttendance();
        workAttendance.setOnworkTime(timestamp);
        return workAttendanceDao.lastAllEmpWorkAtt(workAttendance);
    }
}
