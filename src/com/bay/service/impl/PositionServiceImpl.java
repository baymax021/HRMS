package com.bay.service.impl;


import com.bay.dao.PositionDao;
import com.bay.model.Position;
import com.bay.service.PositionService;
import com.bay.util.ObjectParseUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

/**
 * Created by baymax on on 2017-11-01 22:19.
 * No cross no  crown.
 */
@Service
@Transactional
public class PositionServiceImpl implements PositionService {
    @Resource
    private PositionDao positionDao;

    @Override
    public boolean addPosition(Position position) {
        return positionDao.addPosition(position);
    }

    @Override
    public String deletePosition(Integer posId) {
        Position position1 = positionDao.queryPositionAndEmp(posId);
        if (position1.getEmployeeList().size() > 0) {
            return "该职位有员工，不能删除";
        }
        boolean b = positionDao.deletePosition(posId);
        if (b) {
            return "删除成功";
        }
        return "删除失败";
    }
}
