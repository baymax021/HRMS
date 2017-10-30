package com.bay.dao;


import com.bay.model.DeliverRecord;

import java.util.List;

/**
 * Created by baymax on on 2017-10-29 16:05.
 * No cross no  crown.
 */

public interface DeliverRecordDao {
    boolean addDeliverRecord(DeliverRecord deliverRecord);

    boolean updateDeliverRecord(DeliverRecord deliverRecord);

    /**
     *
     * @param drId  根据投递ID查看该投递的记录
     * @return

     */
    DeliverRecord deliverRecord(Integer drId);
    DeliverRecord deliverRecord(DeliverRecord deliverRecord);

    /**
     * @param deliverRecord 1、游客根据自己的简历ID查看自己投递记录
     *                      2、管理员根据招聘信息ID查看所有应聘者的投递记录
     *
     */
    List<DeliverRecord> deliverRecordList(DeliverRecord deliverRecord);

    /**
     * @return 管理查看所有岗位所有应聘者的投递记录
     */
    List<DeliverRecord> deliverRecordList();


}
