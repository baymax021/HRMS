package com.bay.service.impl;


import com.bay.dao.DepartmentDao;
import com.bay.dao.PositionDao;
import com.bay.model.Department;
import com.bay.model.Position;
import com.bay.service.DepartmentService;
import com.bay.util.ObjectParseUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by baymax on on 2017-10-30 13:27.
 * No cross no  crown.
 */


@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService {
    @Resource
    private DepartmentDao departmentDao;
    @Resource
    private PositionDao positionDao;


    @Override
    public List<Department> departmentList() {
        return departmentDao.departmentList();
    }

    @Override
    public boolean addDepartmentAndPostions(Department department, List<Position> positionList) {
        boolean b = departmentDao.addDepartment(department);
        if (b) {
            Integer depId = department.getDepId();
            for (Position position : positionList) {
                position.setDepartmentId(depId);
                positionDao.addPosition(position);
            }
            return true;
        } else {
            return false;
        }
    }

    @Override
    public String deleteDepartment(Integer depId) {
        Department department = new Department();
        department.setDepId(depId);
        Department department1 = departmentDao.queryDepartment(department);
        System.out.println("~~~~~~~~~~~~~~~~~~");
        System.out.println(department1);
        System.out.println("~~~~~~~~~~~~~~~~~~");
        if (department1.getPositionList().size() > 0) {
            List<Position> positionList = department1.getPositionList();
            for (Position position : positionList) {
                if (position.getEmployeeList().size() > 0) {
                    return "有员工属于该部门，不能删除";
                }
            }
        }
        departmentDao.deleteDepartment(department);
        return "删除成功";
    }

    @Override
    public boolean updateDepartment(Department department, String[] posIds, String[] posNames) {
        boolean b = departmentDao.updateDepartment(department);
        if (!b) {
            return false;
        }
        if (posIds == null) {
            return true;
        }
        for (int i = 0; i < posNames.length; i++) {
            Position position = new Position();
            Integer integer = new Integer(posIds[i]);
            String s = posNames[i];
            position.setPosId(integer);
            position.setPosName(s);
            boolean b1 = positionDao.updatePosition(position);
            if (!b1) {
                return false;
            }
        }
        return true;

    }

    @Override
    public List<Department> depEmpExistList() {
        return departmentDao.depEmpExistList();
    }

    @Override
    public List<Department> depsAndEmployees() {
        return departmentDao.depsAndEmployees();
    }


}
