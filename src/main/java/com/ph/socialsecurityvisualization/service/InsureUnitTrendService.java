
package com.ph.socialsecurityvisualization.service;


import com.ph.socialsecurityvisualization.entitiy.InsureUnitTrend;

import java.util.List;


/**
 * The interface Insure unit trend service.
 *
 * @author slothph
 */
public interface InsureUnitTrendService {

    /**
     * Query insure date list.
     *
     * @return the list
     */
    List<InsureUnitTrend> queryInsureDate();

    /**
     * Query unit list.
     *
     * @return the list
     */
    List<InsureUnitTrend> queryUnit();

    /**
     * Query cancel list.
     *
     * @return the list
     */
    List<InsureUnitTrend> queryCancel();


}
