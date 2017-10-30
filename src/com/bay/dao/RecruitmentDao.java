package com.bay.dao;

import com.bay.model.Recruitment;

import java.util.List;

/**
 * @author shmil
 */
public interface RecruitmentDao {
    /**
     * @param recruitment
     * @return true ������Ƹ�ɹ�
     *          false ����ʧ��
     */
    boolean addRecruitment(Recruitment recruitment);

    List<Recruitment> recruitmentList();

    Recruitment recruitment(Integer recId);
}
