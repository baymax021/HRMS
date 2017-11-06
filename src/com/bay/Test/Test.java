package com.bay.Test;

import com.bay.model.Candidate;
import com.bay.model.Education;
import com.bay.model.Resume;
import com.bay.service.CandidateService;
import com.bay.service.impl.CandidateServiceImpl;
import com.bay.service.impl.ResumeServiceImpl;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by baymax on 2017/10/27.
 * No cross no  crown.
 */
public class Test {
    public static void main(String[] args) {
        /*ResumeServiceImpl resumeService = new ResumeServiceImpl();
        Resume resume = new Resume();
        List<Education> educationList = new ArrayList<>();
        Education education = new Education();
        resume.setCandidateId(1);
        education.setSchool("3333");
        education.setDegree("本科");
        educationList.add(education);
        resumeService.addResume(resume,educationList);*/
//        CandidateService candidateService= new CandidateServiceImpl();
//        Candidate candidate = new Candidate();
//        candidate.setCandName("baymax");
//        candidate.setCandName("11");
//        Candidate candidate1 = candidateService.candidateLogin(candidate);
//        System.out.println(candidate1);

        String info = "该员工的账号信息如下：\n 员工编号：1006 初始密码：123456  姓名： 张三";

        System.out.println("录用成功！\n"+info);


    }
}
