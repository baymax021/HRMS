package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Salary {
  private Integer sId;
  private Integer employeeId;
  private Double basicSalary;
  private Double meritPay;
  private Double socialSecurity;
  private Double extraMoney;
  private Timestamp createTime;
  private Employee employee;

}
