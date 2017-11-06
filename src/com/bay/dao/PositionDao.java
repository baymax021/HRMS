package com.bay.dao;


import com.bay.model.Position;

import java.util.List;

/**
 * Created by baymax on on 2017-10-30 00:36.
 * No cross no  crown.
 */

public interface PositionDao {
    boolean addPosition(Position position);
    boolean updatePosition(Position position);
    boolean deletePosition(Integer posId);

    Position queryPositionAndEmp(Integer posId);

    Position queryPositionByDepId(Integer depId);

    List<Position> positionList(Position position);
    List<Position> positionList();
}
