package com.bay.service;


import com.bay.model.Objection;

import java.util.List;

/**
 * Created by baymax on on 2017-11-14 06:06.
 * No cross no  crown.
 */

public interface ObjectionService {
    String addObj(Objection objection);

    List<Objection> myObj(Integer empId);
}
