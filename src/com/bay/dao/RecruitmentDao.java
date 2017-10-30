package com.bay.dao;

import com.bay.model.Recruitment;

import java.util.List;

/**
 * @author shmil
 */
public interface RecruitmentDao {
    /**
     * @param recruitment
     * @return true 发布招聘成功
     *          false 发布失败
     */
    boolean addRecruitment(Recruitment recruitment);

    List<Recruitment> recruitmentList();

    Recruitment recruitment(Integer recId);
}
