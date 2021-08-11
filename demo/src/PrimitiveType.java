package src;

/**
 * Created by nlin on 7/7/17.
 */
public class PrimitiveType {

    public static void main(String[] args){

        //Java语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。
        byte b = 127;
        short s = 32767;
        int i = 2147483647;
        long l = 10000L;
        float f = 0.0f;
        double d = 0.0d;
        boolean bo = false;
        char c = 'a';

        //auto convert
        s = b;

        // force convert
        s = (short) i;

    }
}
