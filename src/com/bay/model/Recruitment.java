package com.bay.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recruitment {
  private Integer recId;
  private String recPosition;
  private String recPay;
  private String workContent;
  private String workAddress;
  private String otherRequirements;
  private Timestamp createTime;


}
