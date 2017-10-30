package com.bay.controller;

import com.bay.model.*;
import com.bay.service.DeliverRecordService;
import com.bay.service.ResumeService;
import com.bay.util.ObjectParseUtil;
import jdk.nashorn.internal.ir.debug.JSONWriter;
import jdk.nashorn.internal.parser.JSONParser;
import jdk.nashorn.internal.runtime.JSONFunctions;
import jdk.nashorn.internal.runtime.JSONListAdapter;
import jdk.nashorn.internal.runtime.ListAdapter;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.tags.Param;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
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

    @RequestMapping(value = "/my_resume", method = RequestMethod.POST)
    @ResponseBody
    public void myResume(Integer cid, HttpServletResponse response) {
        Resume resume = resumeService.reusmeByCid(cid);
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
        System.out.println(drId);
        DeliverRecord deliverRecord = deliverRecordService.deliverRecord(drId);
        System.out.println(deliverRecord);
        if(deliverRecord.getLabel().equals(DeliverRecord.LABEL_SENDED)){
            deliverRecordService.updateDeliverRecord(drId,DeliverRecord.LABEL_READED);
        }
        Integer resumeId = deliverRecord.getResumeId();
        System.out.println(resumeId);
        Resume resume = resumeService.queryResumeById(resumeId);
        System.out.println(resume);
        JSONObject jsonObject = JSONObject.fromObject(resume);
        System.out.println(jsonObject);
        try {
            response.getWriter().print(jsonObject);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }




}
