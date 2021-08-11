package src;

/**
 * Created by nlin on 7/7/17.
 */
public class VarargsDemo {

    public static void main(String args[]) {
        // 调用可变参数的方法
        printMax(34, 3, 3, 2, 56.5);
        printMax(new double[]{1, 2, 3});
    }

    public static void printMax(double... numbers){
        if(numbers.length > 0){
            for (double i:numbers) {
                System.out.print(i);
            }
        }
    }
}
