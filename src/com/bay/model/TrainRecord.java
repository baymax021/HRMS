package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

/**
 * @author shmil
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TrainRecord {
  private Integer trId;
  private Integer employeeId;
  private Integer trainId;
  private Timestamp createTime;

  private Employee employee;
  private Train train;
}
