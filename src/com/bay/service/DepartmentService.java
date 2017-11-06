package com.bay.service;


import com.bay.model.Department;
import com.bay.model.Position;

import java.util.List;

/**
 * Created by baymax on on 2017-10-30 13:26.
 * No cross no  crown.
 */

public interface DepartmentService {
    List<Department> departmentList();

    boolean addDepartmentAndPostions(Department department, List<Position> positions);

    String deleteDepartment(Integer depId);

    boolean updateDepartment(Department department, String[] posIds, String[] posNames);


    List<Department>  depEmpExistList();

}
