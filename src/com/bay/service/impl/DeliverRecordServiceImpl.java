package com.bay.service.impl;


import com.bay.dao.DeliverRecordDao;
import com.bay.model.DeliverRecord;
import com.bay.service.DeliverRecordService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by baymax on on 2017-10-29 16:31.
 * No cross no  crown.
 */
@Service
@Transactional
public class DeliverRecordServiceImpl implements DeliverRecordService {
    @Resource
    private DeliverRecordDao deliverRecordDao;
    @Override
    public boolean addDeliverRecord(DeliverRecord deliverRecord) {
        deliverRecord.setLabel(DeliverRecord.LABEL_SENDED);
        return deliverRecordDao.addDeliverRecord(deliverRecord);
    }

    @Override
    public String  updateDeliverRecord(Integer drId) {
        DeliverRecord deliverRecord = deliverRecordDao.deliverRecord(drId);
        deliverRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        if (DeliverRecord.LABEL_SENDED.equals(deliverRecord.getLabel())) {
//            查阅简历 不用弹窗信息
            deliverRecord.setLabel(DeliverRecord.LABEL_READED);
            boolean b = deliverRecordDao.updateDeliverRecord(deliverRecord);
            if(b){
                return "1";
            }else {
                return "0";
            }
        }else if(DeliverRecord.LABEL_READED.equals(deliverRecord.getLabel())){
//            发送面试邀请 需要弹窗返回信息
            deliverRecord.setLabel(DeliverRecord.LABEL_INVITED);
            boolean b = deliverRecordDao.updateDeliverRecord(deliverRecord);
            if(b){
                System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                return "2";
            }else {
                return "0";
            }
        }else if(DeliverRecord.LABEL_INVITED.equals(deliverRecord.getLabel())){
//            确认应邀，面试 需要返回信息
            deliverRecord.setLabel(DeliverRecord.LABEL_INTERVIEW);
            boolean b = deliverRecordDao.updateDeliverRecord(deliverRecord);
            if(b){
                return "2";
            }else {
                return "0";
            }
        }else {
//            录用，  不用弹窗信息
            deliverRecord.setLabel(DeliverRecord.LABEL_HIRED);
            boolean b = deliverRecordDao.updateDeliverRecord(deliverRecord);
            if(b){
                return "1";
            }else {
                return "0";
            }
        }
    }

    @Override
    public DeliverRecord deliverRecord(Integer drId) {
        return deliverRecordDao.deliverRecord(drId);
    }

    @Override
    public List<DeliverRecord> deliverRecordListByRid(Integer rId) {
        DeliverRecord deliverRecord = new DeliverRecord();
        deliverRecord.setResumeId(rId);
        return deliverRecordDao.deliverRecordList(deliverRecord);
    }

    @Override
    public List<DeliverRecord> deliverRecordListByRecId(Integer recId) {
        DeliverRecord deliverRecord = new DeliverRecord();
        deliverRecord.setRecruitmentId(recId);
        return deliverRecordDao.deliverRecordList(deliverRecord);
    }


    @Override
    public List<DeliverRecord> deliverRecordList() {
        return deliverRecordDao.deliverRecordList();
    }
}
