package com.bay.util;


import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by baymax on on 2017-11-06 12:51.
 * No cross no  crown.
 */

public class MyDateFormat {
    public static Timestamp dateFormatDate(){
        Calendar date = Calendar.getInstance();
        int i = date.get(Calendar.YEAR);
        int i1 = date.get(Calendar.MONTH) + 1;
        int i2 = date.get(Calendar.DATE);
        String date1 = i+"-"+i1+"-"+i2;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date parse=null;
        try {
            parse = sdf.parse(date1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Timestamp timestamp = new Timestamp(parse.getTime());
        return timestamp;
    }

    public static Timestamp dateFormatMonth(){
        Calendar date = Calendar.getInstance();
        int i = date.get(Calendar.YEAR);
        int i1 = date.get(Calendar.MONTH) + 1;
        String date1 = i+"-"+i1;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM");
        Date parse=null;
        try {
            parse = sdf.parse(date1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Timestamp timestamp = new Timestamp(parse.getTime());
        return timestamp;
    }
    public static Timestamp dateFormatLastMonth(){
        Calendar date = Calendar.getInstance();
        int i = date.get(Calendar.YEAR);
        int i1 = date.get(Calendar.MONTH);
        String date1 = i+"-"+i1;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM");
        Date parse=null;
        try {
            parse = sdf.parse(date1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Timestamp timestamp = new Timestamp(parse.getTime());
        return timestamp;
    }



}
