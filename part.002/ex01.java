package lesson02;

public class ex01 {

  public static void main(String[] args) {
    int n = 100;
    int acc = 0;

    for (int val = 1; val <= n; val++) {
      acc += val;
    }

    System.out.printf("acc: %d\n", acc);
  }
}