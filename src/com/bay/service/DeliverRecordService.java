package com.bay.service;


import com.bay.model.DeliverRecord;

import java.util.List;

/**
 * Created by baymax on on 2017-10-29 16:30.
 * No cross no  crown.
 */

public interface DeliverRecordService {
    boolean addDeliverRecord(DeliverRecord deliverRecord);

    String updateDeliverRecord(Integer drId);

    DeliverRecord deliverRecord(Integer drId);

    List<DeliverRecord> deliverRecordListByRid(Integer rId);

    List<DeliverRecord> deliverRecordListByRecId(Integer recId);

    List<DeliverRecord> deliverRecordList();
}
