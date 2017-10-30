package com.bay.service;

import com.bay.model.Recruitment;

import java.util.List;

/**
 * @author shmil
 */
public interface RecruitmentService {
    boolean addRecruitment(Recruitment recruitment);
    List<Recruitment> recruitmentList();
    Recruitment recruitment(Integer recId);
}
