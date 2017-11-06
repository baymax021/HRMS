package com.bay.controller;


import com.bay.model.Position;
import com.bay.service.PositionService;
import com.bay.util.ObjectParseUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

/**
 * @author baymax on
 * @date 2017-11-01 22:02
 * No cross no  crown.
 */
@Controller
public class PositionController {
    @Resource
    private PositionService positionService;


    /**
     * @param
     * @return produces配置解决传输String乱码问题
     */
    @RequestMapping(value = "/addPos", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String addPos(HttpServletRequest request) {
        Integer departmentId = new Integer(request.getParameter("departmentId"));
        String[] posNames = request.getParameterValues("posName");
        for (String posName : posNames) {
            Position position = new Position();
            position.setDepartmentId(departmentId);
            position.setPosName(posName);
            boolean b = positionService.addPosition(position);
            if (!b) {
                return "增加失败";
            }
        }
        return "增加成功";
    }

    @RequestMapping(value = "/deletePos", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String deletePos(Integer posId) {
        return positionService.deletePosition(posId);
    }
}
