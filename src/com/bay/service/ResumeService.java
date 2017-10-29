package com.bay.service;

import com.bay.model.*;

import java.util.List;

/**
 * Created by baymax on 2017/10/27.
 * No cross no  crown.
 */
public interface ResumeService {
    boolean addResume(Resume resume, BasicInfo basicInfo, List<Education> educations, List<WorkExperience> workExperiences , List<ProjectExperience> projectExperiences);
    Resume queryResumeById(Integer id);
    Resume reusmeByCid(Integer cId);
}
