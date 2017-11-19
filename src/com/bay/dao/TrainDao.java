package com.bay.dao;


import com.bay.model.Train;

import java.util.List;

/**
 * Created by baymax on on 2017-11-03 09:29.
 * No cross no  crown.
 */

public interface TrainDao {
    boolean addTrain(Train train);

    List<Train> findTrainListDone(Integer empId);
    List<Train> allTrainListDone();

    List<Train> findTrainListNone(Integer empId);

    List<Train> allTrainListNone();
}
