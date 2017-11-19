package com.bay.service.impl;

import com.bay.dao.*;
import com.bay.model.*;
import com.bay.service.ResumeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 *
 * @author baymax
 * @date 2017/10/27
 * No cross no  crown.
 */

@Service
@Transactional
public class ResumeServiceImpl implements ResumeService {

    @Resource
    private ResumeDao resumeDao;

    @Resource
    private BasicInfoDao basicInfoDao;

    @Resource
    private EducationDao educationDao;

    @Resource
    private WorkExperienceDao workExperienceDao;

    @Resource
    private ProjectExperienceDao projectExperienceDao;

    @Override
    public boolean addResume(Resume resume, BasicInfo basicInfo, List<Education> educations, List<WorkExperience> workExperiences , List<ProjectExperience> projectExperiences) {
        resumeDao.addResume(resume);
        Integer rid = resume.getRid();
        basicInfo.setResumeId(rid);
        basicInfoDao.addBasicInfo(basicInfo);
        for (Education education : educations) {
            education.setResumeId(rid);
            educationDao.addEduByRid(education);
        }
        for (WorkExperience workExperience : workExperiences) {
            workExperience.setResumeId(rid);
            workExperienceDao.addWorkExperience(workExperience);
        }
        for (ProjectExperience projectExperience : projectExperiences) {
            projectExperience.setResumeId(rid);
            projectExperienceDao.addProjectExperience(projectExperience);
        }
        return true;
    }

    @Override
    public Resume queryResumeById(Integer id) {
        return resumeDao.queryResumeById(id);
    }

    @Override
    public String reusmeByCid(Integer cId) {
        Resume resume = resumeDao.reusmeByCid(cId);
        if (resume == null) {
            return "N";
        }
        return "Y";
    }

    @Override
    public Resume reusmeByDrid(Integer drId) {


        return resumeDao.reusmeByDrid(drId);
    }
}
