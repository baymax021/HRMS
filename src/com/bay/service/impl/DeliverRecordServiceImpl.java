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
    public boolean updateDeliverRecord(Integer drId,String label) {
        DeliverRecord deliverRecord = new DeliverRecord();
        deliverRecord.setDrId(drId);
        deliverRecord.setLabel(label);
        deliverRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        return deliverRecordDao.updateDeliverRecord(deliverRecord);
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
