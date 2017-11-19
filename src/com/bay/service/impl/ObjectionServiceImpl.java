package com.bay.service.impl;


import com.bay.dao.ObjectionDao;
import com.bay.model.Objection;
import com.bay.service.ObjectionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by baymax on on 2017-11-14 06:06.
 * No cross no  crown.
 */
@Service
@Transactional
public class ObjectionServiceImpl implements ObjectionService {
    @Resource
    private ObjectionDao objectionDao;

    @Override
    public String addObj(Objection objection) {
        objection.setStatus(Objection.SEND_STATUS);
        boolean b = objectionDao.addObj(objection);
        if (b) {
            return "发送成功";
        }
        return "发送失败";
    }

    @Override
    public List<Objection> myObj(Integer empId) {
        return objectionDao.myObj(empId);
    }
}
