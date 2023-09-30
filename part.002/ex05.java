package lesson02;

public class ex05 {
  public static void main(String[] args) {
    int n = 5;
    int acc = 0;

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n; j *= 2) {
        acc += 1;
        System.out.printf("i:%d j:%d   ", i, j);
      }
    }

    System.out.printf("acc: %d\n", acc);
  }
}
