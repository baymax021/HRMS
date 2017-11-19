package com.bay.Test;

import com.bay.model.Candidate;
import com.bay.model.Education;
import com.bay.model.Resume;
import com.bay.service.CandidateService;
import com.bay.service.impl.CandidateServiceImpl;
import com.bay.service.impl.ResumeServiceImpl;
import com.bay.util.MyDateFormat;


import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.logging.SimpleFormatter;

/**
 * Created by baymax on 2017/10/27.
 * No cross no  crown.
 */
public class Test {

    private static long time;

    public static void main(String[] args) {
        /*ResumeServiceImpl resumeService = new ResumeServiceImpl();
        Resume resume = new Resume();
        List<Education> educationList = new ArrayList<>();
        Education education = new Education();
        resume.setCandidateId(1);
        education.setSchool("3333");
        education.setDegree("±¾¿Æ");
        educationList.add(education);
        resumeService.addResume(resume,educationList);*/
//        CandidateService candidateService= new CandidateServiceImpl();
//        Candidate candidate = new Candidate();
//        candidate.setCandName("baymax");
//        candidate.setCandName("11");
//        Candidate candidate1 = candidateService.candidateLogin(candidate);
//        System.out.println(candidate1);
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

//        Date date = new Date(System.currentTimeMillis());
//        Calendar date = Calendar.getInstance();
//        int i = date.get(Calendar.YEAR);
//        int i1 = date.get(Calendar.MONTH) + 1;
//        int i2 = date.get(Calendar.DATE);
//        String date1 = i+"-"+i1+"-"+i2;
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        Date parse=null;
//        try {
//            parse = sdf.parse(date1);
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//        System.out.println(parse.getTime());
//        System.out.println(date1);
//
        Timestamp timestamp1 = MyDateFormat.dateFormatMonth();
        System.out.println(timestamp1);


    }
}
