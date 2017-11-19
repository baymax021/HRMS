package com.bay.controller;


import com.bay.model.Train;
import com.bay.model.TrainRecord;
import com.bay.service.TrainService;
import net.sf.json.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

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


    @RequestMapping(value = "/findTrainListDone",method = RequestMethod.GET)
    @ResponseBody
    public void findTrainListDone(Integer empId, HttpServletResponse response){
        List<Train> trainListDone = trainService.findTrainListDone(empId);
        JSONArray jsonArray = JSONArray.fromObject(trainListDone);
        for (Object o : jsonArray) {
            System.out.println(o);
        }
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    @RequestMapping(value = "/findTrainListNone",method = RequestMethod.GET)
    @ResponseBody
    public void findTrainListNone(Integer empId, HttpServletResponse response){
        List<Train> trainListDone = trainService.findTrainListNone(empId);
        JSONArray jsonArray = JSONArray.fromObject(trainListDone);
        for (Object o : jsonArray) {
            System.out.println(o);
        }
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    @RequestMapping(value = "/allTrainListDone",method = RequestMethod.GET)
    @ResponseBody
    public void allTrainListDone(HttpServletResponse response){
        List<Train> trainListDone = trainService.allTrainListDone();
        JSONArray jsonArray = JSONArray.fromObject(trainListDone);
        for (Object o : jsonArray) {
            System.out.println(o);
        }
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @RequestMapping(value = "/allTrainListNone",method = RequestMethod.GET)
    @ResponseBody
    public void allTrainListNone(HttpServletResponse response){
        List<Train> trainListDone = trainService.allTrainListNone();
        JSONArray jsonArray = JSONArray.fromObject(trainListDone);
        for (Object o : jsonArray) {
            System.out.println(o);
        }
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }




}
