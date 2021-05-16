
package com.ph.socialsecurityvisualization.service.impl;


import com.ph.socialsecurityvisualization.entitiy.InsureUnitTrend;
import com.ph.socialsecurityvisualization.mapper.InsureUnitTrendMapper;
import com.ph.socialsecurityvisualization.service.InsureUnitTrendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsureUnitTrendServiceImpl implements InsureUnitTrendService {
    @Autowired
    public InsureUnitTrendMapper insureUnitTrendMapper;

    @Override
    public List<InsureUnitTrend> queryInsureDate() {
        return insureUnitTrendMapper.queryInsureDate();
    }

    @Override
    public List<InsureUnitTrend> queryUnit() {
        return null;
    }

    @Override
    public List<InsureUnitTrend> queryCancel() {
        return null;
    }


}
