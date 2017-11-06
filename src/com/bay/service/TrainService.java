package com.bay.service;


import com.bay.model.Train;
import org.springframework.stereotype.Service;

/**
 * Created by baymax on on 2017-11-03 14:08.
 * No cross no  crown.
 */

public interface TrainService {
    String addTrain(Train train,String[] empIds);
}
