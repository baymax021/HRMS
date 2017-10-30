package com.bay.controller;

import com.bay.model.Candidate;
import com.bay.model.Education;
import com.bay.model.ProjectExperience;
import com.bay.model.Resume;
import com.bay.service.CandidateService;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.annotation.Resource;
import java.awt.event.ItemEvent;
import java.util.List;

/**
 *
 * @author baymax
 * @date 2017/10/26
 * No cross no  crown.
 */
@Controller
@SessionAttributes({"candidate"})
public class CandidateController {
    @Resource
    private CandidateService candidateService;

    @RequestMapping(value = "/candidate.register", method = RequestMethod.POST)
    public String register(Candidate candidate, ModelMap modelMap) {
        boolean b = candidateService.candidateRegister(candidate);
        if (b) {

            modelMap.put("info", "×¢²á³É¹¦");
            return "candidate/login";
        } else {
            modelMap.put("info", "×¢²áÊ§°Ü");
            return "candidate/register";
        }
    }

    @RequestMapping(value = "/candidate.login", method = RequestMethod.POST)
    public String login(Candidate candidate, ModelMap modelMap) {
        candidate = candidateService.candidateLogin(candidate);
        if (candidate != null) {
            modelMap.put("candidate", candidate);
            return "candidate/main";
        }
        modelMap.put("info", "µÇÂ¼Ê§°Ü");
        return "candidate/login";

    }
}
