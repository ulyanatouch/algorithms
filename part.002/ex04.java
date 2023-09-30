package lesson02;

public class ex04 {
  public static void main(String[] args) {
    int n = 5;
    int acc = 0;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        acc += 1;
        System.out.printf("i:%d j:%d   ", i, j);
      }
    }
    // i==0 j - n раз
    // i==1 j - n раз
    // ..
    // i==n j - n раз
    // n*n

    System.out.printf("acc: %d\n", acc);
  }
}
