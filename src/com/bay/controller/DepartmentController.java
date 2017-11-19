package com.bay.controller;


import com.bay.model.Department;
import com.bay.model.Position;
import com.bay.service.DepartmentService;
import com.bay.util.ObjectParseUtil;
import net.sf.json.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

/**
 * @author baymax on
 * @date 2017-10-30 13:25
 * No cross no  crown.
 */

@Controller
public class DepartmentController {
    @Resource
    private DepartmentService departmentService;

    @RequestMapping(value = "/departmentList", method = {RequestMethod.POST, RequestMethod.GET})
    @ResponseBody
    public JSONArray departmentList() {
        List<Department> departmentList = departmentService.departmentList();
        JSONArray jsonArray = JSONArray.fromObject(departmentList.toArray());
        System.out.println(jsonArray);
        return jsonArray;
    }


    @RequestMapping(value = "/addDepAndPos", method = {RequestMethod.POST, RequestMethod.GET})
    @ResponseBody
    public String addDepAndPos(Department department, Position position) throws ClassNotFoundException, InvocationTargetException, InstantiationException, IllegalAccessException {
        if (department != null && !department.getDepName().trim().equals("")) {
            List<Position> positionList = null;
            try {
                positionList = ObjectParseUtil.parseObject(position, Position.class);
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
            boolean b = departmentService.addDepartmentAndPostions(department, positionList);
            if (b) {
                return "{\"info\":\"增加成功\"}";
            }
        }
        return "{\"info\":\"增加失败\"}";
    }

    @RequestMapping(value = "/dep_del", method = RequestMethod.POST)
    @ResponseBody
    public String deleteDepartment(Integer depId) {
        String info = departmentService.deleteDepartment(depId);
        return "{\"info\":\"" + info + "\"}";

    }

    @RequestMapping(value = "/updateDepAndPos", method = RequestMethod.POST)
    @ResponseBody
    public String updateDepAndPos(Department department, HttpServletRequest request) {
        String[] posIds = request.getParameterValues("posId");
        String[] posNames = request.getParameterValues("posName");
        System.out.println(department);
        System.out.println(posIds);
        System.out.println(posNames);
        boolean b = departmentService.updateDepartment(department, posIds, posNames);
        if (b) {
            return "{\"info\":\"更新成功\"}";
        }
        return "{\"info\":\"更新失败\"}";
    }

    @RequestMapping(value = "/depEmpExistList", method = RequestMethod.GET,produces = "text/html;charset=UTF-8")
    @ResponseBody
    public void depEmpExistList(HttpServletResponse response) {
       List<Department> departmentList = departmentService.depEmpExistList();
        JSONArray jsonArray = JSONArray.fromObject(departmentList);
        System.out.println(jsonArray);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/depsAndEmployees", method = {RequestMethod.POST,RequestMethod.GET},produces = "text/html;charset=UTF-8")
    @ResponseBody
    public void depsAndEmployees(HttpServletResponse response){
        List<Department> depsAndEmployees =  departmentService.depsAndEmployees();
        JSONArray jsonArray = JSONArray.fromObject(depsAndEmployees);
        System.out.println(jsonArray);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
