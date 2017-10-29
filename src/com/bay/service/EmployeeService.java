package com.bay.service;

import com.bay.model.Employee;

import java.util.List;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
public interface EmployeeService {
    boolean addEmployee(Employee employee);
    Employee queryEmployeeByEmpidAndPassword(Employee employee);
    List<Employee> employeeList();
    List<Employee> employeeList(Integer id);

}
