package src;

/**
 * Created by nlin on 7/7/17.
 */
public class GenericClassDemo<T> {
    private T t;

    public void add(T t) {
        this.t = t;
    }

    public T get() {
        return t;
    }

    public static void main( String args[] ){
        GenericClassDemo<Integer> integerBox = new GenericClassDemo<Integer>();
        GenericClassDemo<String> stringBox = new GenericClassDemo<String>();

        integerBox.add(new Integer(10));
        stringBox.add(new String("10"));
    }
}
