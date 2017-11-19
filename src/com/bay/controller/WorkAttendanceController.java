package com.bay.controller;


import com.bay.model.Employee;
import com.bay.model.WorkAttendance;
import com.bay.service.WorkAttendanceService;
import net.sf.json.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Created by baymax on on 2017-11-06 10:06.
 * No cross no  crown.
 */
@Controller
public class WorkAttendanceController {
    @Resource
    private WorkAttendanceService workAttendanceService;

    @RequestMapping(value = "/onWork", method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String onWork(HttpSession session) {
        Employee employee = (Employee) session.getAttribute("employee");
        String s = workAttendanceService.onWork(employee.getEmpId());
        return s;
    }

    @RequestMapping(value = "/offWork", method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String offWork(HttpSession session,String password) {
        Employee employee = (Employee) session.getAttribute("employee");
        if (employee.getPassword().equals(password)){
            String s = workAttendanceService.offWork(employee.getEmpId());
            return s;
        }else {
            return "输入的密码不正确,打卡失败！";
        }
    }

    @RequestMapping(value = "/currentWorkAtt",method = RequestMethod.GET)
    @ResponseBody
    public void workAttendanceListByCurrMonth(HttpSession session, HttpServletResponse response){
        Employee employee = (Employee) session.getAttribute("employee");
        List<WorkAttendance> workAttendances = workAttendanceService.workAttendanceListByCurrMonth(employee.getEmpId());
        JSONArray jsonArray = JSONArray.fromObject(workAttendances);
        for (Object o : jsonArray) {
            System.out.println(o);
        }
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @RequestMapping(value = "/lastMonthWorkAtt",method = RequestMethod.GET)
    @ResponseBody
    public void workAttendanceListByLastMonth(HttpSession session, HttpServletResponse response){
        Employee employee = (Employee) session.getAttribute("employee");
        List<WorkAttendance> workAttendances = workAttendanceService.workAttendanceListByLastMonth(employee.getEmpId());
        JSONArray jsonArray = JSONArray.fromObject(workAttendances);
        System.out.println(jsonArray);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/currentAllEmpWorkAtt",method = RequestMethod.GET)
    @ResponseBody
    public void currentAllEmpWorkAtt(HttpServletResponse response){
        List<WorkAttendance> workAttendances = workAttendanceService.currentAllEmpWorkAtt();
        JSONArray jsonArray = JSONArray.fromObject(workAttendances);
        for (Object o : jsonArray) {
            System.out.println(o);
        }
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/lastAllEmpWorkAtt",method = RequestMethod.GET)
    @ResponseBody
    public void lastAllEmpWorkAtt(HttpServletResponse response){
        List<WorkAttendance> workAttendances = workAttendanceService.lastAllEmpWorkAtt();
        JSONArray jsonArray = JSONArray.fromObject(workAttendances);
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
