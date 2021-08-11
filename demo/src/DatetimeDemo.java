package src;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by nlin on 7/7/17.
 */
public class DatetimeDemo {
    public static void main(String args[]){
        Date dNow = new Date();

        SimpleDateFormat ft = new SimpleDateFormat("YYY-MM-dd HH:mm:ss");
        System.out.print(ft.format(dNow));

    }
}
