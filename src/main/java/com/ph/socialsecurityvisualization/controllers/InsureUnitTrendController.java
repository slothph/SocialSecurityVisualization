package com.ph.socialsecurityvisualization.controllers;

import com.ph.socialsecurityvisualization.entitiy.InsureUnitTrend;
import com.ph.socialsecurityvisualization.service.InsureUnitTrendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author hao.peng01@hand-china.com
 * @version 1.0
 * @date 2021/5/9
 */
@Controller
public class InsureUnitTrendController {
    @Autowired
    public InsureUnitTrendService insureUnitTrendService;


    @RequestMapping(value = "/insure")
    @ResponseBody
    public List<InsureUnitTrend> queryInsureDate() {

        return insureUnitTrendService.queryInsureDate();
    }

}
