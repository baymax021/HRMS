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
public class BasicInfo {
    private Integer bid;
    private Integer resumeId; //简历id
    private String realName; // 真实姓名
    private String image; // 证件照
    private String gender;
    private String dateOfBirth;
    private String phone;
    private String email;
    private String address;
    private String married;
    private String selfEvaluation;
    private String huji;
    private Resume resume;

//    public BasicInfo() {
//    }
//
//    public BasicInfo(Integer resumeId, String realName, String image, String gender, String dateOfBirth, String phone, String email, String address, String married, String selfEvaluation, String huji) {
//        this.resumeId = resumeId;
//        this.realName = realName;
//        this.image = image;
//        this.gender = gender;
//        this.dateOfBirth = dateOfBirth;
//        this.phone = phone;
//        this.email = email;
//        this.address = address;
//        this.married = married;
//        this.selfEvaluation = selfEvaluation;
//        this.huji = huji;
//    }
//
//    public Integer getBid() {
//        return bid;
//    }
//
//    public void setBid(Integer bid) {
//        this.bid = bid;
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
//    public String getRealName() {
//        return realName;
//    }
//
//    public void setRealName(String realName) {
//        this.realName = realName;
//    }
//
//    public String getImage() {
//        return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }
//
//    public String getGender() {
//        return gender;
//    }
//
//    public void setGender(String gender) {
//        this.gender = gender;
//    }
//
//    public String getDateOfBirth() {
//        return dateOfBirth;
//    }
//
//    public void setDateOfBirth(String dateOfBirth) {
//        this.dateOfBirth = dateOfBirth;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public String getMarried() {
//        return married;
//    }
//
//    public void setMarried(String married) {
//        this.married = married;
//    }
//
//    public String getSelfEvaluation() {
//        return selfEvaluation;
//    }
//
//    public void setSelfEvaluation(String selfEvaluation) {
//        this.selfEvaluation = selfEvaluation;
//    }
//
//    public String getHuji() {
//        return huji;
//    }
//
//    public void setHuji(String huji) {
//        this.huji = huji;
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
//        return "BasicInfo{" +
//                "bid=" + bid +
//                ", resumeId=" + resumeId +
//                ", realName='" + realName + '\'' +
//                ", image='" + image + '\'' +
//                ", gender='" + gender + '\'' +
//                ", dateOfBirth='" + dateOfBirth + '\'' +
//                ", phone='" + phone + '\'' +
//                ", email='" + email + '\'' +
//                ", address='" + address + '\'' +
//                ", married='" + married + '\'' +
//                ", selfEvaluation='" + selfEvaluation + '\'' +
//                ", huji='" + huji + '\'' +
//                '}';
//    }
}
