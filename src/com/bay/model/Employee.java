package com.bay.model;

import java.sql.Timestamp;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
public class Employee {
    private Integer empId;
    private Integer resumeId;
    private String password;
    private Integer departmentId;
    private Integer positionId;
    private String empStatus;
    private String empType;
    private Timestamp entryTime;
    private Timestamp dimissionTime;
    private Resume resume;

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }

    public Employee() {
    }

    public Employee(Integer resumeId, String password, Integer departmentId, Integer positionId, String empStatus, String empType, Timestamp entryTime, Timestamp dimissionTime, Resume resume) {
        this.resumeId = resumeId;
        this.password = password;
        this.departmentId = departmentId;
        this.positionId = positionId;
        this.empStatus = empStatus;
        this.empType = empType;
        this.entryTime = entryTime;
        this.dimissionTime = dimissionTime;
        this.resume = resume;
    }

    public Integer getEmpId() {
        return empId;
    }

    public void setEmpId(Integer empId) {
        this.empId = empId;
    }

    public Integer getResumeId() {
        return resumeId;
    }

    public void setResumeId(Integer resumeId) {
        this.resumeId = resumeId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public Integer getPositionId() {
        return positionId;
    }

    public void setPositionId(Integer positionId) {
        this.positionId = positionId;
    }

    public String getEmpStatus() {
        return empStatus;
    }

    public void setEmpStatus(String empStatus) {
        this.empStatus = empStatus;
    }

    public String getEmpType() {
        return empType;
    }

    public void setEmpType(String empType) {
        this.empType = empType;
    }

    public Timestamp getEntryTime() {
        return entryTime;
    }

    public void setEntryTime(Timestamp entryTime) {
        this.entryTime = entryTime;
    }

    public Timestamp getDimissionTime() {
        return dimissionTime;
    }

    public void setDimissionTime(Timestamp dimissionTime) {
        this.dimissionTime = dimissionTime;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "empId=" + empId +
                ", resumeId=" + resumeId +
                ", password='" + password + '\'' +
                ", departmentId=" + departmentId +
                ", positionId=" + positionId +
                ", empStatus='" + empStatus + '\'' +
                ", empType='" + empType + '\'' +
                ", entryTime=" + entryTime +
                ", dimissionTime=" + dimissionTime +
                ", resume=" + resume +
                '}';
    }
}
