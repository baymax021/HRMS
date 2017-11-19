package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkAttendance {
  private Integer waId;
  private Integer employeeId;
  private Timestamp onworkTime;
  private Timestamp offworkTime;

  private Employee employee;
}
