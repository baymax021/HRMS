package com.bay.service.impl;

import com.bay.dao.EmployeeDao;
import com.bay.model.Employee;
import com.bay.service.EmployeeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
    @Resource
    private EmployeeDao employeeDao;

    @Override
    public boolean addEmployee(Employee employee) {
        return employeeDao.addEmployee(employee);
    }

    @Override
    public Employee queryEmployeeByEmpidAndPassword(Employee employee) {
        return employeeDao.queryEmployeeByEmpidAndPassword(employee);
    }

    @Override
    public List<Employee> employeeList() {
        return employeeDao.employeeList();
    }

    @Override
    public List<Employee> employeeList(Integer id) {
        return employeeDao.employeeList(id);
    }
}
