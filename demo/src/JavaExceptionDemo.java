/**
 * Created by nlin on 7/1/17.
 */
public class JavaExceptionDemo {

    public static void main(String[] args){
        exception1();
        System.out.print("hello");
    }

    public static void exception1(){
        new Exception("test exception");
    }
}
