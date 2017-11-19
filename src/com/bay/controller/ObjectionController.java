package com.bay.controller;


import com.bay.model.Objection;
import com.bay.service.ObjectionService;
import net.sf.json.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Created by baymax on on 2017-11-14 06:06.
 * No cross no  crown.
 */
@Controller
public class ObjectionController {
    @Resource
    private ObjectionService objectionService;


    @RequestMapping(value = "/addObj",method = RequestMethod.POST,produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String addObj(Objection objection){
       return objectionService.addObj(objection);
    }


    @RequestMapping(value = "/myObj",method = RequestMethod.POST)
    @ResponseBody
    public void myObj(Integer empId, HttpServletResponse response){
        List<Objection> objections = objectionService.myObj(empId);
        JSONArray jsonArray = JSONArray.fromObject(objections);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
