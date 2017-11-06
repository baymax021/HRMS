package com.bay.service;


import com.bay.model.Position; /**
 * Created by baymax on on 2017-11-01 22:08.
 * No cross no  crown.
 */

public interface PositionService {
    boolean addPosition(Position position);

    String deletePosition(Integer posId);
}
