package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeliverRecord {
  public static final String LABEL_SENDED = "已投递";
  public static final String LABEL_READED = "已查阅";
  public static final String LABEL_INVITED = "已邀请";
  public static final String LABEL_INTERVIEW = "应邀面试";
  public static final String LABEL_HIRED = "已录用";
  private Integer drId;
  private Integer resumeId;
  private Integer recruitmentId;
  private String label;
  private Timestamp updateTime;
  private Recruitment recruitment;
}
