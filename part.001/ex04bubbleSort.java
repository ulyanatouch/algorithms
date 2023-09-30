package lesson01;

import java.lang.reflect.Array;
import java.util.Arrays;

public class ex04bubbleSort {

  public static void main(String[] args) {
    int[] array = new int[] { 3, 0, 5, 1, 4 };

    System.out.println("before: " + Arrays.toString(array));
    bubbleSort(array);

    System.out.println("after: " + Arrays.toString(array));
  }

  public static void bubbleSort(int[] items) {
    int length = items.length;
    int count = 0;

    for (int j = 0; j < length - 1; j++) {
      for (int i = 0; i < length - 1 - j; i++) {
        if (items[i] > items[i + 1]) {
          int t = items[i];
          items[i] = items[i + 1];
          items[i + 1] = t;
          count++;
        } else {
          count++;
        }
        System.out.println(" >> j:" + j + " " + Arrays.toString(items));
      }
    }
    System.out.println("count = " + count);
  }
}
