import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 线程池 Demo
 */
public class ExecutorServiceTest {
    public static void main(String []args) {

        for (int i = 0; i < 3; i++) {
            createPool(i);
        }

        while (true){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private static void createPool(int poolId) {
        ExecutorService executorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 20; i++) {
            int finalI = i;
            executorService.execute(new Runnable() {
                public void run() {
                    try {
                        Thread.sleep(20000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println("Asynchronous task " + poolId + finalI);
                }
            });
        }
    }
}
