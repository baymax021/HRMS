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
public class Education {
    private Integer eid;
    private Integer resumeId;
    private String school;
    private String major;
    private String startTime;
    private String endTime;
    private String degree;
    private Resume resume;

//    public Education() {
//    }
//
//    public Education(Integer resumeId, String school, String major, String startTime, String endTime, String degree, Resume resume) {
//        this.resumeId = resumeId;
//        this.school = school;
//        this.major = major;
//        this.startTime = startTime;
//        this.endTime = endTime;
//        this.degree = degree;
//        this.resume = resume;
//    }
//
//    public Integer getEid() {
//        return eid;
//    }
//
//    public void setEid(Integer eid) {
//        this.eid = eid;
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
//    public String getSchool() {
//        return school;
//    }
//
//    public void setSchool(String school) {
//        this.school = school;
//    }
//
//    public String getMajor() {
//        return major;
//    }
//
//    public void setMajor(String major) {
//        this.major = major;
//    }
//
//    public String getStartTime() {
//        return startTime;
//    }
//
//    public void setStartTime(String startTime) {
//        this.startTime = startTime;
//    }
//
//    public String getEndTime() {
//        return endTime;
//    }
//
//    public void setEndTime(String endTime) {
//        this.endTime = endTime;
//    }
//
//    public String getDegree() {
//        return degree;
//    }
//
//    public void setDegree(String degree) {
//        this.degree = degree;
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
//        return "Education{" +
//                "eid=" + eid +
//                ", resumeId=" + resumeId +
//                ", school='" + school + '\'' +
//                ", major='" + major + '\'' +
//                ", startTime='" + startTime + '\'' +
//                ", endTime='" + endTime + '\'' +
//                ", degree='" + degree + '\'' +
//                ", resume=" + resume +
//                '}';
//    }
}
