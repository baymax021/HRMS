package com.bay.dao;

import com.bay.model.Resume;

import java.util.List;

/**
 * Created by baymax on 2017/10/26.
 * No cross no  crown.
 */
public interface ResumeDao {
    Integer addResume(Resume resume);
    boolean updateResume(Resume resume);
    Resume queryResumeById(Integer id);
    Resume reusmeByCid(Integer cId);
}
