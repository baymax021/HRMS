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
public class WorkExperience {
    private Integer wid;
    private Integer resumeId;
    private String company;
    private String position;
    private String startDate;
    private String endDate;
    private String jobContent;
    private Resume resume;
//
//    public WorkExperience() {
//    }
//
//    public WorkExperience(Integer resumeId, String company, String position, String startDate, String endDate, String jobContent) {
//        this.resumeId = resumeId;
//        this.company = company;
//        this.position = position;
//        this.startDate = startDate;
//        this.endDate = endDate;
//        this.jobContent = jobContent;
//    }
//
//    public Integer getWid() {
//        return wid;
//    }
//
//    public void setWid(Integer wid) {
//        this.wid = wid;
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
//    public String getCompany() {
//        return company;
//    }
//
//    public void setCompany(String company) {
//        this.company = company;
//    }
//
//    public String getPosition() {
//        return position;
//    }
//
//    public void setPosition(String position) {
//        this.position = position;
//    }
//
//    public String getStartDate() {
//        return startDate;
//    }
//
//    public void setStartDate(String startDate) {
//        this.startDate = startDate;
//    }
//
//    public String getEndDate() {
//        return endDate;
//    }
//
//    public void setEndDate(String endDate) {
//        this.endDate = endDate;
//    }
//
//    public String getJobContent() {
//        return jobContent;
//    }
//
//    public void setJobContent(String jobContent) {
//        this.jobContent = jobContent;
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
//        return "WorkExperience{" +
//                "wid=" + wid +
//                ", resumeId=" + resumeId +
//                ", company='" + company + '\'' +
//                ", position='" + position + '\'' +
//                ", startDate='" + startDate + '\'' +
//                ", endDate='" + endDate + '\'' +
//                ", jobContent='" + jobContent + '\'' +
//                ", resume=" + resume +
//                '}';
//    }
}
