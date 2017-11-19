package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Objection {
  public static final String SEND_STATUS="已发送";
  public static final String DONE_STATUS="已处理";
  public static final String REFUSED_STATUS="已拒绝";
  private Integer obId;
  private Integer salaryId;
  private String content;
  private Double result;
  private String status;
  private Timestamp createTime;

  private Salary salary;

}
