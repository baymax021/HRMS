package com.bay.service.impl;

import com.bay.dao.RecruitmentDao;
import com.bay.model.Recruitment;
import com.bay.service.RecruitmentService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author shmil
 */
@Service
@Transactional
public class RecruitmentServiceImpl implements RecruitmentService {
    @Resource
    private RecruitmentDao recruitmentDao;


    @Override
    public boolean addRecruitment(Recruitment recruitment) {
        return recruitmentDao.addRecruitment(recruitment);
    }

    @Override
    public List<Recruitment> recruitmentList() {
        return recruitmentDao.recruitmentList();
    }

    @Override
    public Recruitment recruitment(Integer recId) {
        return recruitmentDao.recruitment(recId);
    }
}
