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
    List<Employee> employeeList(Integer id);  // ����ͨ�� 1������id��ѯ���ŵ�����Ա�� 2��ְλid��ѯ ��ְλ������Ա��

}
