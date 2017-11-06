package com.bay.service.impl;

import com.bay.dao.DeliverRecordDao;
import com.bay.dao.EmployeeDao;
import com.bay.model.Employee;
import com.bay.service.EmployeeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;

/**
 * @author baymax
 * @date 2017/10/28
 * No cross no  crown.
 */
@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
    @Resource
    private EmployeeDao employeeDao;

    @Resource
    private DeliverRecordDao deliverRecordDao;

    @Override
    public String addEmployee(Employee employee) {
        employee.setEmpStatus(Employee.EMP_STATUS_TRY);
        employee.setEmpType(Employee.EMP_TYPE_NORMAL);
        employee.setPassword("123456");                 //初始密码
        employee.setEntryTime(new Timestamp(System.currentTimeMillis()));
        boolean b = employeeDao.addEmployee(employee);
        if (b) {
            String info = "该员工的账号信息如下：\n 姓名：" + employee.getRealName() + "  员工编号：" + employee.getEmpId() + "  初始密码：123456";
            return "录用成功！\n" + info;
        }
        return "录用失败！";
    }

    @Override
    public Employee queryEmployeeByEmpidAndPassword(Employee employee) {
        return employeeDao.queryEmployee(employee);
    }

    @Override
    public List<Employee> employeeList() {
        return employeeDao.employeeList();
    }

    @Override
    public String updateEmployee(Employee employee) {
        boolean b = employeeDao.updateEmployee(employee);
        String info = null;
        if (b) {
//            更新成功
            info = "2";
        } else {
//            更新失败
            info = "0";
        }
        return info;
    }

    @Override
    public Employee queryEmployeeDetail(Integer empId) {
        return employeeDao.queryEmployeeDetail(empId);
    }

}
