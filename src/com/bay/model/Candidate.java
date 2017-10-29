package com.bay.model;

import java.util.List;

/**
 * Created by baymax on 2017/10/26.
 * No cross no  crown.
 */
public class Candidate {
    private Integer cid;
    private String candName;
    private String password;
    private String status;

//   一个游客可以创建多份简历
    private Resume resume;

    public Candidate() {
    }

    public Candidate(String candName, String password, String status, Resume resume) {
        this.candName = candName;
        this.password = password;
        this.status = status;
        this.resume = resume;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getCandName() {
        return candName;
    }

    public void setCandName(String candName) {
        this.candName = candName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }

    @Override
    public String toString() {
        return "Candidate{" +
                "cid=" + cid +
                ", candName='" + candName + '\'' +
                ", password='" + password + '\'' +
                ", status='" + status + '\'' +
                ", resume=" + resume +
                '}';
    }
}
