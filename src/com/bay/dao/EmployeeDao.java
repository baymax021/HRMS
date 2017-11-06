package com.bay.dao;

import com.bay.model.Employee;

import java.util.List;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
public interface EmployeeDao {
    boolean addEmployee(Employee employee);
    Employee queryEmployee(Employee employee);
    List<Employee> employeeList();

    boolean updateEmployee(Employee employee);

    Employee queryEmployeeDetail(Integer empId);
//    List<Employee> employeeNotLeaveList();

}
