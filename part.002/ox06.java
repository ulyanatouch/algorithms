public class ox06 {
  public static void main(String[] args) {
    int number = 147;

    boolean result = true;
    for (int current = 2; current <= Math.sqrt(number); current++) {
      if (number % current == 0) {
        System.out.println(current);
        result = false;
        break;
      }
    }

    System.out.printf("result: %d %b\n", number, result);
  }
}
