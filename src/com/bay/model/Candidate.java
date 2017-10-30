package com.bay.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by baymax on 2017/10/26.
 * No cross no  crown.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Candidate {
    private Integer cid;
    private String candName;
    private String password;
    private String status;

//   一个游客有一份简历
    private Resume resume;


}
