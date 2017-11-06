package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author shmil
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Train {
  private Integer tid;
  private String tStartTime;
  private String tEndTime;
  private String tContent;
  private String tTitle;
  private List<TrainRecord> trainRecordList;
}
