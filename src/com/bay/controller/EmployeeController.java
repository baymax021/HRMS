package com.bay.controller;

import com.bay.model.Employee;
import com.bay.service.EmployeeService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
@Controller
public class EmployeeController {
    @Resource
    private EmployeeService employeeService;
    @RequestMapping(value = "/emp.login", method = RequestMethod.POST)
    public String login(Employee employee, HttpSession session, ModelMap modelMap){
        Employee employee1 = employeeService.queryEmployeeByEmpidAndPassword(employee);
        if(employee1 != null){
            if(employee1.getEmpType().equalsIgnoreCase("admin")){
                session.setAttribute("admin",employee1);
                return "admin/main";
            }else {
                session.setAttribute("employee",employee1);
                return "employee/main";
            }
        }
        modelMap.put("info","员工编号或密码不正确");
        return "employee/login";
    }


    /**
     *
     * @param drId
     * @return
     */
    @RequestMapping(value = "/hireNew",method = RequestMethod.GET)
    public String hire(Integer drId){
        return "";
    }

}
