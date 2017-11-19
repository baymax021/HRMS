package com.bay.controller;

import com.bay.model.*;
import com.bay.service.DeliverRecordService;
import com.bay.service.ResumeService;
import com.bay.util.ObjectParseUtil;

import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

/**
 *
 * @author baymax
 * @date 2017/10/27
 * No cross no  crown.
 */
@Controller
public class ResumeController {
    @Resource
    private ResumeService resumeService;

    @Resource
    private DeliverRecordService deliverRecordService;

    @RequestMapping(value = "/addResume", method = RequestMethod.POST)
    public String addResume(Resume resume, BasicInfo basicInfo, Education education, WorkExperience workExperience, ProjectExperience projectExperience) {
        List<Education> educationList = null;
        List<WorkExperience> workExperiences = null;
        List<ProjectExperience> projectExperiences = null;
        try {
            educationList = ObjectParseUtil.parseObject(education, Education.class);
            workExperiences = ObjectParseUtil.parseObject(workExperience, WorkExperience.class);
            projectExperiences = ObjectParseUtil.parseObject(projectExperience, ProjectExperience.class);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        resumeService.addResume(resume, basicInfo, educationList, workExperiences, projectExperiences);
        return "candidate/main";
    }

    @RequestMapping(value = "/my_resume", method ={RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public void myResume(Integer rid,HttpServletResponse response) {
        Resume resume = resumeService.queryResumeById(rid);
        JSONObject jsonObject = JSONObject.fromObject(resume);
        try {
            response.getWriter().print(jsonObject);

        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    @RequestMapping(value = "/query_resume", method = RequestMethod.GET)
    @ResponseBody
    public void queryResume(Integer drId, HttpServletResponse response) {
        Resume resume = resumeService.reusmeByDrid(drId);
        JSONObject jsonObject = JSONObject.fromObject(resume);
        System.out.println(jsonObject);
        try {
            response.getWriter().print(jsonObject);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }



}
