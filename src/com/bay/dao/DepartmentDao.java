package com.bay.dao;


import com.bay.model.Department;

import java.util.List;

/**
 * Created by baymax on on 2017-10-30 00:38.
 * No cross no  crown.
 */

public interface DepartmentDao {
    boolean addDepartment(Department department);
    boolean updateDepartment(Department department);
    boolean deleteDepartment(Department department);
    Department queryDepartment(Department department);
    List<Department> departmentList(Department department);
    List<Department> departmentList();
}
