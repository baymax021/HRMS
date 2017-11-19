package com.bay.dao;


import com.bay.model.Objection;

import java.util.List;

/**
 * Created by baymax on on 2017-11-14 08:31.
 * No cross no  crown.
 */

public interface ObjectionDao {
    boolean addObj(Objection objection);

    List<Objection> myObj(Integer empId);
}
