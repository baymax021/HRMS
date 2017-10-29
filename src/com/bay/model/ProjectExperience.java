package com.bay.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by baymax on 2017/10/26.
 * No cross no  crown.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectExperience {
    private Integer pid;
    private Integer resumeId;
    private String projectName;
    private String projectDescription;
    private Resume resume;
//    public ProjectExperience() {
//    }
//
//    public ProjectExperience(Integer resumeId, String projectName, String projectDescription) {
//        this.resumeId = resumeId;
//        this.projectName = projectName;
//        this.projectDescription = projectDescription;
//    }
//
//    public Integer getPid() {
//        return pid;
//    }
//
//    public void setPid(Integer pid) {
//        this.pid = pid;
//    }
//
//    public Integer getResumeId() {
//        return resumeId;
//    }
//
//    public void setResumeId(Integer resumeId) {
//        this.resumeId = resumeId;
//    }
//
//    public String getProjectName() {
//        return projectName;
//    }
//
//    public void setProjectName(String projectName) {
//        this.projectName = projectName;
//    }
//
//    public String getProjectDescription() {
//        return projectDescription;
//    }
//
//    public void setProjectDescription(String projectDescription) {
//        this.projectDescription = projectDescription;
//    }
//
//    public Resume getResume() {
//        return resume;
//    }
//
//    public void setResume(Resume resume) {
//        this.resume = resume;
//    }
//
//    @Override
//    public String toString() {
//        return "ProjectExperienceDao{" +
//                "pid=" + pid +
//                ", resumeId=" + resumeId +
//                ", projectName='" + projectName + '\'' +
//                ", projectDescription='" + projectDescription + '\'' +
//                ", resume=" + resume +
//                '}';
//    }
}
