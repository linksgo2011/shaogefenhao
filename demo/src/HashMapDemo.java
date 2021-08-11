package src;

import java.util.HashMap;

/**
 * Created by nlin on 7/7/17.
 */
public class HashMapDemo {
    public static void main(String args[]) {
        HashMap hashMap = new HashMap();
        hashMap.put("number",100);

        // different data type
        hashMap.put("number","string");


        System.out.println(hashMap);
        System.out.println(hashMap.get("number"));
        System.out.println(hashMap.get("number1"));
    }
}

