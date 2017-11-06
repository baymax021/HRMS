package com.bay.controller;


import com.bay.model.Train;
import com.bay.service.TrainService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by baymax on on 2017-11-03 14:06.
 * No cross no  crown.
 */

@Controller
public class TrainController {
    @Resource
    private TrainService trainService;


    @RequestMapping(value = "/addTrain",method = RequestMethod.POST,produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String addTrain(Train train,HttpServletRequest request){
        String[] empIds = request.getParameterValues("empId");
        return trainService.addTrain(train,empIds);
    }
}
