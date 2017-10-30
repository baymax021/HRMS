package com.bay.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * @author shmil
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Position {
  private Integer posId;
  private Integer departmentId;
  private String posName;
  private Department department;

}
