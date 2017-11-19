package com.bay.service.impl;


import com.bay.dao.RewardPunishDao;
import com.bay.model.RewardPunish;
import com.bay.service.RewardPunishService;
import com.bay.util.MyDateFormat;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;

/**
 * Created by baymax on on 2017-11-13 08:49.
 * No cross no  crown.
 */
@Service
@Transactional
public class RewardPunishServiceImpl implements RewardPunishService {
    @Resource
    private RewardPunishDao rewardPunishDao;

    @Override
    public List<RewardPunish> findRP() {
        Timestamp timestamp = MyDateFormat.dateFormatLastMonth();
        Timestamp timestamp1 = MyDateFormat.dateFormatMonth();
        return rewardPunishDao.findRP(timestamp);
    }
}
