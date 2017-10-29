package com.bay.service.impl;

import com.bay.dao.CandidateDao;
import com.bay.model.Candidate;
import com.bay.service.CandidateService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by baymax on 2017/10/26.
 * No cross no  crown.
 */
@Service
@Transactional
public class CandidateServiceImpl implements CandidateService {
    @Resource
    private CandidateDao candidateDao;

    @Override
    public boolean candidateRegister(Candidate candidate) {
        boolean b=false;
        try {
            b = candidateDao.addCandidate(candidate);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return b;
    }

    @Override
    public Candidate candidateLogin(Candidate candidate) {
        return candidateDao.queryCandidate(candidate);
    }
}
