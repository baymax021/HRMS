package com.bay.controller;


import com.bay.service.DepartmentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * Created by baymax on on 2017-10-30 13:25.
 * No cross no  crown.
 */

@Controller
public class DepartmentController {

    @Resource
    private DepartmentService departmentService;


    @RequestMapping(value = "/departmentList", method = RequestMethod.POST)
    @ResponseBody
    public String departmentList() {
        return "";
    }
}
