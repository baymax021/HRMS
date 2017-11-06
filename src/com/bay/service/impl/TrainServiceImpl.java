package com.bay.service.impl;


import com.bay.dao.TrainDao;
import com.bay.dao.TrainRecordDao;
import com.bay.model.Train;
import com.bay.model.TrainRecord;
import com.bay.service.TrainService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by baymax on on 2017-11-03 14:17.
 * No cross no  crown.
 */
@Service
@Transactional
public class TrainServiceImpl implements TrainService {
    @Resource
    private TrainDao trainDao;
    @Resource
    private TrainRecordDao trainRecordDao;
    @Override
    public String addTrain(Train train,String[] empIds) {

        boolean b = trainDao.addTrain(train);
        if(b){
            Integer trainTid = train.getTid();
            System.out.println();
            for (String empId : empIds) {
                Integer employeeId = new Integer(empId);
                TrainRecord trainRecord = new TrainRecord();
                trainRecord.setEmployeeId(employeeId);
                trainRecord.setTrainId(trainTid);
                System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                System.out.println(trainRecord);
                boolean b1 = trainRecordDao.addTrainRecord(trainRecord);
                if(!b1){
                    return "发布失败";
                }
            }
            return "发布成功";
        }
        return "发布失败";
    }
}
