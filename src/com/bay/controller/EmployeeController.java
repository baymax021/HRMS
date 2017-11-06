package com.bay.controller;

import com.bay.model.Employee;
import com.bay.service.EmployeeService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */
@Controller
//@SessionAttributes({"admin","employee"})
public class EmployeeController {
    @Resource
    private EmployeeService employeeService;

    @RequestMapping(value = "/emp.login", method = RequestMethod.POST)
    public String login(Employee employee, HttpSession session, ModelMap modelMap) {
        employee = employeeService.queryEmployeeByEmpidAndPassword(employee);
        if (employee != null) {
            if (employee.getEmpType().equalsIgnoreCase("admin")) {
                session.setAttribute("admin", employee);
                return "admin/main";
            } else {
                session.setAttribute("employee", employee);
                return "employee/main";
            }
        }
        modelMap.put("info", "员工编号或密码不正确");
        return "employee/login";
    }

    @RequestMapping(value = "/employeeList", method = RequestMethod.GET)
    @ResponseBody
    public void employeeList(HttpServletResponse response) {
        List<Employee> employeeList = employeeService.employeeList();
        JSONArray jsonArray = JSONArray.fromObject(employeeList);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    /**
     * @param
     * @return
     */
    @RequestMapping(value = "/hireNew", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String hire(Employee employee) {
        return employeeService.addEmployee(employee);
    }


    @RequestMapping(value = "/mycenter", method = RequestMethod.POST)
    @ResponseBody
    public void showMyData(HttpSession session, HttpServletResponse response) {
        Employee employee = (Employee) session.getAttribute("employee");
        Employee employee1 = employeeService.queryEmployeeDetail(employee.getEmpId());
        JSONObject jsonObject = JSONObject.fromObject(employee1);
        System.out.println(jsonObject);
        try {
            response.getWriter().print(jsonObject);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @RequestMapping(value = "/updateEmp", method = RequestMethod.POST)
    @ResponseBody
    public String updateEmployee(Employee employee) {
        return employeeService.updateEmployee(employee);
    }

    @RequestMapping(value = "/updateEmpPasswd", method = RequestMethod.POST,produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String updateEmpPasswd(HttpSession session, String old_password, String new_password) {
        Employee employee = (Employee) session.getAttribute("employee");
        if (!employee.getPassword().equals(old_password)) {
            return "1";
        }else {
            employee.setPassword(new_password);
            return employeeService.updateEmployee(employee);
        }


    }


}
