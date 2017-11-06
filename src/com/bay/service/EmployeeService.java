package com.bay.service;

import com.bay.model.Employee;

import java.util.List;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
public interface EmployeeService {
    String  addEmployee(Employee employee);
    Employee queryEmployeeByEmpidAndPassword(Employee employee);
    List<Employee> employeeList();

    String  updateEmployee(Employee employee);

    Employee queryEmployeeDetail(Integer empId);
}
