package com.bay.dao;

import com.bay.model.Employee;

import java.util.List;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
public interface EmployeeDao {
    boolean addEmployee(Employee employee);
    Employee queryEmployeeByEmpidAndPassword(Employee employee);
    List<Employee> employeeList();
    List<Employee> employeeList(Integer id);  // 可以通过 1、部门id查询部门的所有员工 2、职位id查询 该职位的所有员工

}
