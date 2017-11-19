package com.bay.service.impl;


import com.bay.dao.SalaryDao;
import com.bay.model.Salary;
import com.bay.service.SalaryService;
import com.bay.util.MyDateFormat;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;

/**
 * Created by baymax on on 2017-11-13 15:21.
 * No cross no  crown.
 */
@Service
@Transactional
public class SalaryServiceImpl implements SalaryService {
    @Resource
    private SalaryDao salaryDao;

    @Override
    public String addSalary(String[] employeeIds, String[] basicSalaries, String[] meritPays, String[] socialSecurities, String[] extraMonies) {
        for (int i = 0; i < employeeIds.length; i++) {
           Salary salary = new Salary();
            Integer employeeId = new Integer(employeeIds[i]);
            Double basicSalary = new Double(basicSalaries[i]);
            Double meritPay = new Double(meritPays[i]);
            Double socialSecurity = new Double(socialSecurities[i]);
            Double extraMoney = new Double(extraMonies[i]);
            salary.setEmployeeId(employeeId);
            salary.setBasicSalary(basicSalary);
            salary.setMeritPay(meritPay);
            salary.setSocialSecurity(socialSecurity);
            salary.setExtraMoney(extraMoney);
            boolean b = salaryDao.addSalary(salary);
            if(!b){
                return "操作失败";
            }

        }
        return "操作成功";
    }

    @Override
    public List<Salary> allSalaryList() {
        Timestamp timestamp = MyDateFormat.dateFormatLastMonth();
        Timestamp timestamp1 = MyDateFormat.dateFormatMonth();
        return salaryDao.allSalaryList(timestamp1);
    }

    @Override
    public Salary mySalary(Integer empId) {
        return salaryDao.findSalaryByEmpId(empId).get(0);
    }
}
