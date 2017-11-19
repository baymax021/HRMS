package com.bay.controller;


import com.bay.model.RewardPunish;
import com.bay.service.RewardPunishService;
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
 * Created by baymax on on 2017-11-13 08:47.
 * No cross no  crown.
 */

@Controller
public class RewardPunishController {
    @Resource
    private RewardPunishService rewardPunishService;


    @RequestMapping(value = "/findRP",method = RequestMethod.POST)
    @ResponseBody
    public void findRP(HttpServletResponse response) {
        List<RewardPunish> rewardPunishes = rewardPunishService.findRP();
        JSONArray jsonArray = JSONArray.fromObject(rewardPunishes);
        try {
            response.getWriter().print(jsonArray);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
