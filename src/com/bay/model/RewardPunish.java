package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RewardPunish {
  private Integer rpId;
  private Integer employeeId;
  private String rpType;
  private Integer rpCounts;
  private Timestamp createTime;
  private Integer num;
  private Employee employee;
}
