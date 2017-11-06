package com.bay.model;

public class Work_attendance {
  private String wa_id;
  private String employee_id;
  private java.sql.Date onwork_time;
  private java.sql.Date offwork_time;

  public String getWa_id() {
    return wa_id;
  }

  public void setWa_id(String wa_id) {
    this.wa_id = wa_id;
  }

  public String getEmployee_id() {
    return employee_id;
  }

  public void setEmployee_id(String employee_id) {
    this.employee_id = employee_id;
  }

  public java.sql.Date getOnwork_time() {
    return onwork_time;
  }

  public void setOnwork_time(java.sql.Date onwork_time) {
    this.onwork_time = onwork_time;
  }

  public java.sql.Date getOffwork_time() {
    return offwork_time;
  }

  public void setOffwork_time(java.sql.Date offwork_time) {
    this.offwork_time = offwork_time;
  }
}
