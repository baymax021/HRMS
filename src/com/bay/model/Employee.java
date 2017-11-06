package com.bay.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by baymax on 2017/10/28.
 * No cross no  crown.
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    public static final String EMP_STATUS_TRY="试用期";
    public static final String EMP_STATUS_ON="在职";
    public static final String EMP_STATUS_OFF="离职";

    public static final String EMP_TYPE_NORMAL="NORMAL";
    public static final String EMP_TYPE_ADMIN="ADMIN";

    private Integer empId;
    private Integer resumeId;
    private String password;
    private Integer positionId;
    private String empStatus;
    private String empType;
    private Timestamp entryTime;
    private Timestamp dimissionTime;
    private String realName;


    private Resume resume;
    private Position position;
    private List<TrainRecord> trainRecordList;


}
