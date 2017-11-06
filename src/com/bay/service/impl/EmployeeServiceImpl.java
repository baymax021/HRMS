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
        employee.setPassword("123456");                 //��ʼ����
        employee.setEntryTime(new Timestamp(System.currentTimeMillis()));
        boolean b = employeeDao.addEmployee(employee);
        if (b) {
            String info = "��Ա�����˺���Ϣ���£�\n ������" + employee.getRealName() + "  Ա����ţ�" + employee.getEmpId() + "  ��ʼ���룺123456";
            return "¼�óɹ���\n" + info;
        }
        return "¼��ʧ�ܣ�";
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
//            ���³ɹ�
            info = "2";
        } else {
//            ����ʧ��
            info = "0";
        }
        return info;
    }

    @Override
    public Employee queryEmployeeDetail(Integer empId) {
        return employeeDao.queryEmployeeDetail(empId);
    }

}
