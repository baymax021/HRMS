package com.bay.dao;


import com.bay.model.Salary;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by baymax on on 2017-11-13 15:22.
 * No cross no  crown.
 */

public interface SalaryDao {
    boolean addSalary(Salary salary);

    List<Salary> allSalaryList(Timestamp timestamp);

    List<Salary> findSalaryByEmpId(Integer empId);
}
