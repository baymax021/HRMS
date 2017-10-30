package com.bay.controller;


import com.bay.model.DeliverRecord;
import com.bay.model.Resume;
import com.bay.service.DeliverRecordService;
import com.bay.service.ResumeService;
import net.sf.json.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 *
 * @author baymax on
 * @date 2017-10-29 16:44
 * No cross no  crown.
 */
@Controller
public class DeliverRecordController {
    @Resource
    private DeliverRecordService deliverRecordService;


    @RequestMapping(value = "/send", method = RequestMethod.POST)
    @ResponseBody
    public String send(DeliverRecord deliverRecord) {

        boolean b = deliverRecordService.addDeliverRecord(deliverRecord);
        if (b) {
            return "{\"info\":\"���ͳɹ�\"}";
        }
        return "{\"info\":\"����ʧ��\"}";
    }


    @RequestMapping(value = "/userRecordList", method = RequestMethod.POST)
    @ResponseBody
    public JSONArray userRecordList(Integer rid) {
        List<DeliverRecord> deliverRecords = deliverRecordService.deliverRecordListByRid(rid);
        JSONArray jsonArray = JSONArray.fromObject(deliverRecords);
        return jsonArray;
    }

    @RequestMapping(value = "/recordList", method = RequestMethod.POST)
    @ResponseBody
    public JSONArray recordList() {
        List<DeliverRecord> deliverRecords = deliverRecordService.deliverRecordList();
        JSONArray jsonArray = JSONArray.fromObject(deliverRecords);
        return jsonArray;
    }

    @RequestMapping(value = "/update",method = RequestMethod.GET)
    @ResponseBody
    public String update(Integer drId){
        DeliverRecord deliverRecord = deliverRecordService.deliverRecord(drId);
        if(DeliverRecord.LABEL_READED.equals(deliverRecord.getLabel())){
            boolean b = deliverRecordService.updateDeliverRecord(drId, DeliverRecord.LABEL_INVITED);
            if(b){
                return "{\"info\":\"���ͳɹ�\"}";
            }
            return "{\"info\":\"����ʧ��\"}";
        }
        return "{\"info\":\" \"}";
    }

    @RequestMapping(value = "/sub_int",method = RequestMethod.GET)
    @ResponseBody
    public String subInt(Integer drId){
        System.out.println(drId);
        DeliverRecord deliverRecord = deliverRecordService.deliverRecord(drId);
        if(DeliverRecord.LABEL_INVITED.equals(deliverRecord.getLabel())){
            boolean b = deliverRecordService.updateDeliverRecord(drId, DeliverRecord.LABEL_INTERVIEW);
            if(b){
                return "{\"info\":\"���ͳɹ�\"}";
            }
            return "{\"info\":\"����ʧ��\"}";
        }
        return "{\"info\":\" \"}";
    }



}
