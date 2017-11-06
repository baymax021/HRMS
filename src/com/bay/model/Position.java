package com.bay.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;


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
  private List<Employee> employeeList;
}
