package com.bay.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Created by baymax on 2017/10/26.
 * No cross no  crown.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Resume {
    private Integer rid;
    private Integer candidateId;

//    简历与用户匹配
    private Candidate candidate;

//    一份简历必须包含一个基本信息
    private BasicInfo basicInfo;
//    教育经历信息：多个
    private List<Education> educations;
//    工作经验：多个
    private List<WorkExperience> workExperiences;
//    项目经验：多个
    private List<ProjectExperience> projectExperiences;
/*
    public Resume() {
    }

    public Resume(Integer candidateId) {
        this.candidateId = candidateId;
    }

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public Integer getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Integer candidateId) {
        this.candidateId = candidateId;
    }

    public BasicInfo getBasicInfo() {
        return basicInfo;
    }

    public void setBasicInfo(BasicInfo basicInfo) {
        this.basicInfo = basicInfo;
    }

    public List<Education> getEducations() {
        return educations;
    }

    public void setEducations(List<Education> educations) {
        this.educations = educations;
    }

    public List<WorkExperience> getWorkExperiences() {
        return workExperiences;
    }

    public void setWorkExperiences(List<WorkExperience> workExperiences) {
        this.workExperiences = workExperiences;
    }

    public List<ProjectExperience> getProjectExperiences() {
        return projectExperiences;
    }

    public void setProjectExperiences(List<ProjectExperience> projectExperiences) {
        this.projectExperiences = projectExperiences;
    }

    public Candidate getCandidate() {
        return candidate;
    }

    public void setCandidate(Candidate candidate) {
        this.candidate = candidate;
    }

    @Override
    public String toString() {
        return "Resume{" +
                "rid=" + rid +
                ", candidateId=" + candidateId +
                ", candidate=" + candidate +
                ", basicInfo=" + basicInfo +
                ", educations=" + educations +
                ", workExperiences=" + workExperiences +
                ", projectExperiences=" + projectExperiences +
                '}';
    }*/
}
