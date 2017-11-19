package com.bay.service;


import com.bay.model.Train;
import com.bay.model.TrainRecord;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by baymax on on 2017-11-03 14:08.
 * No cross no  crown.
 */

public interface TrainService {
    String addTrain(Train train,String[] empIds);

    List<Train> findTrainListDone(Integer empId);

    List<Train> findTrainListNone(Integer empId);

    List<Train> allTrainListDone();

    List<Train> allTrainListNone();

}
