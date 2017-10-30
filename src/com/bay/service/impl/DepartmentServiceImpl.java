package com.bay.service.impl;


import com.bay.dao.DepartmentDao;
import com.bay.model.Department;
import com.bay.service.DepartmentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by baymax on on 2017-10-30 13:27.
 * No cross no  crown.
 */


@Service

public class DepartmentServiceImpl implements DepartmentService {
    @Resource
    private DepartmentDao departmentDao;


    @Override
    public List<Department> departmentList() {
        return departmentDao.departmentList();
    }
}
