package com.bay.dao;


import com.bay.model.RewardPunish;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by baymax on on 2017-11-13 08:50.
 * No cross no  crown.
 */

public interface RewardPunishDao {

    List<RewardPunish> findRP(Timestamp timestamp);
}
