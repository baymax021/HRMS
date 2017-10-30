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
public class Department {
  private Integer depId;
  private Integer depName;
  private String depStatus;
  List<Position> positionList;
}