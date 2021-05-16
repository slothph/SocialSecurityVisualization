
package com.ph.socialsecurityvisualization.mapper;


import com.ph.socialsecurityvisualization.entitiy.InsureUnitTrend;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface InsureUnitTrendMapper {

    public List<InsureUnitTrend> queryInsureDate();

    public List<InsureUnitTrend> queryUnit();

    public List<InsureUnitTrend> queryCancel();


}
