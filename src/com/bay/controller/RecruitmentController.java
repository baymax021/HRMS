package com.bay.controller;

import com.bay.model.Recruitment;
import com.bay.service.RecruitmentService;
import net.sf.json.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author shmil
 */
@Controller
public class RecruitmentController {
    @Resource
    private RecruitmentService recruitmentService;

    @RequestMapping(value = "/publishRecruitment.do", method = RequestMethod.POST,produces="text/html;charset=UTF-8")
    @ResponseBody
    public String publishRecruitment(Recruitment recruitment) {
        boolean b = recruitmentService.addRecruitment(recruitment);
        if (b) {
           return  "{\"info\":\"发布成功\"}";
        } else {
            return  "{\"info\":\"发布失败\"}";
        }

    }

    @RequestMapping(value = "/recruitmentList", method = RequestMethod.POST)
    @ResponseBody
    public JSONArray recruitmentList() {
        List<Recruitment> recruitments = recruitmentService.recruitmentList();
        JSONArray jsonArray = JSONArray.fromObject(recruitments);
        return jsonArray;
    }
}
