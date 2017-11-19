package com.bay.controller;


import com.bay.model.Salary;
import com.bay.service.SalaryService;
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
 * Created by baymax on on 2017-11-13 15:18.
 * No cross no  crown.
 */

@Controller
public class SalaryController {
    @Resource
    private SalaryService salaryService;

    @RequestMapping(value = "/addSalary",method = RequestMethod.POST,produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String addSalary(HttpServletRequest request){
        String[] employeeIds = request.getParameterValues("employeeId");
        String[] basicSalaries = request.getParameterValues("basicSalary");
        String[] meritPays = request.getParameterValues("meritPay");
        String[] socialSecurities = request.getParameterValues("socialSecurity");
        String[] extraMonies = request.getParameterValues("extraMoney");
        return  salaryService.addSalary(employeeIds,basicSalaries,meritPays,socialSecurities,extraMonies);
    }

    @RequestMapping(value = "/allSalaryList",method = RequestMethod.POST)
    @ResponseBody
    public void allSalaryList(HttpServletResponse response){
        List<Salary> salaryList =salaryService.allSalaryList();
        JSONArray jsonArray = JSONArray.fromObject(salaryList);
        System.out.println(jsonArray);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @RequestMapping(value = "/mySalary",method = RequestMethod.POST)
    @ResponseBody
    public void mySalary(Integer empId,HttpServletResponse response){
        Salary salary =salaryService.mySalary(empId);
        System.out.println(salary);
        JSONArray jsonArray = JSONArray.fromObject(salary);
        System.out.println(jsonArray);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
