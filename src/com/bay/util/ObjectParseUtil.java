package com.bay.util;
import com.bay.model.Education;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by baymax on 2017/10/27.
 * No cross no  crown.
 */
public class ObjectParseUtil {

    public static <T> List<T> parseObject(Object obj,Class<T> tClass) throws ClassNotFoundException, IllegalAccessException, InstantiationException, InvocationTargetException {
        List<T> list = new ArrayList<T>();
        String className = obj.getClass().getName();
        Class<?> aClass = Class.forName(className);
        Method[] methods = aClass.getDeclaredMethods();
        int max = 0;
        for (int i = 0; i < methods.length; i++) {
            if (methods[i].getName().startsWith("get")) {
                int n = 0;
                if (methods[i].invoke(obj) != null) {
                    n++;
                    Object invoke = methods[i].invoke(obj);
                    String string = invoke.toString();
                    String[] strings = string.split(",");
                    if (strings.length>max){
                        max=strings.length;
                    }
                }
            }
        }
        if (max>0) {
            for (int i = 0; i < max; i++) {
                Object o = aClass.newInstance();
                list.add((T)o);
            }
            for (int i = 0; i < max; i++) {
                for (int j = 0; j < methods.length; j++) {
                    if (methods[j].getName().startsWith("get")) {
                        Object invoke = methods[j].invoke(obj);
                        if ( invoke != null) {
                            String string = invoke.toString();
                            String[] split = string.split(",");
                            for (int m = 0; m < split.length; m++) {
                                for (int k = 0; k < methods.length; k++) {
                                    if (methods[j].getName().replace("get", "set").equals(methods[k].getName())) {
                                        methods[k].invoke(list.get(m), split[m]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return list;
    }

//    public static void main(String[] args) {
//        Education education = new Education();
//        education.setDegree("111");
//        try {
//            List<Education> educationList = ObjectParseUtil.parseObject(education, Education.class);
//        } catch (ClassNotFoundException e) {
//            e.printStackTrace();
//        } catch (IllegalAccessException e) {
//            e.printStackTrace();
//        } catch (InstantiationException e) {
//            e.printStackTrace();
//        } catch (InvocationTargetException e) {
//            e.printStackTrace();
//        }
//    }
}
