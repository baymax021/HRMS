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
     * @param drId  ����Ͷ��ID�鿴��Ͷ�ݵļ�¼
     * @return

     */
    DeliverRecord deliverRecord(Integer drId);
    DeliverRecord deliverRecord(DeliverRecord deliverRecord);

    /**
     * @param deliverRecord 1���ο͸����Լ��ļ���ID�鿴�Լ�Ͷ�ݼ�¼
     *                      2������Ա������Ƹ��ϢID�鿴����ӦƸ�ߵ�Ͷ�ݼ�¼
     *
     */
    List<DeliverRecord> deliverRecordList(DeliverRecord deliverRecord);

    /**
     * @return ����鿴���и�λ����ӦƸ�ߵ�Ͷ�ݼ�¼
     */
    List<DeliverRecord> deliverRecordList();


}
