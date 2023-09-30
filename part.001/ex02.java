package lesson01;

import java.util.Arrays;

public class ex02 {

  public static double average(int[] items) {
    int count = items.length;

    double result = 0;
    int index = 0;

    while (index < count) {
      result = result + items[index];
      index++;
    }
    return result / count;
  }

  public static boolean check(int[] items) {
    return items.length != 0;
  }

  public static void print(int[] items) {
    System.out.println(Arrays.toString(items));
  }

  public static void print(String message) {
    System.out.println(message);
  }

  public static void print(double number) {
    System.out.println(number);
  }

  public static void main(String[] args) {

    int[] arr = { 1, 2 };
    if (check(arr)) {
      double res = average(arr);
      print(res);
    } else {
      print("Array is empty");
    }
  }
}
