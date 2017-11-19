package com.bay.service;


import com.bay.model.Salary;

import java.util.List;

/**
 * Created by baymax on on 2017-11-13 15:20.
 * No cross no  crown.
 */

public interface SalaryService {

    String addSalary(String[] employeeIds, String[] basicSalaries, String[] meritPays, String[] socialSecurities, String[] extraMonies);

    List<Salary> allSalaryList();

    Salary mySalary(Integer empId);
}
