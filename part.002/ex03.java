package lesson02;

public class ex03 {
  public static void main(String[] args) {
    int count = 10;
    double acc = 0;
    for (int val = 1; val <= count; val++) {
      acc += val;
    }

    double average = acc / count;
    System.out.printf("average: %.2f", average);
  }
}
