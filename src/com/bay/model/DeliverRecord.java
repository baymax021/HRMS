package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeliverRecord {
  public static final String LABEL_SENDED = "��Ͷ��";
  public static final String LABEL_READED = "�Ѳ���";
  public static final String LABEL_INVITED = "������";
  public static final String LABEL_INTERVIEW = "Ӧ������";
  public static final String LABEL_HIRED = "��¼��";
  private Integer drId;
  private Integer resumeId;
  private Integer recruitmentId;
  private String label;
  private Timestamp updateTime;
  private Recruitment recruitment;
}
