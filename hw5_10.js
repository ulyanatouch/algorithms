// Числа Фибоначчи — это последовательность чисел, в которой каждое следующее число является суммой двух предыдущих. Первые два числа последовательности Фибоначчи обычно устанавливаются равными 0 и 1.

// Рекурсивная функция

function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

//   Итеративная функция

function fibonacciIterative(n) {
  let a = 0,
    b = 1,
    temp;

  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return a;
}
