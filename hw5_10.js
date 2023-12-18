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

class NewClass {
  constructor() {
    this.array = [];
  }

  customPush(item) {
    const length = this.array.length;
    this.array[length] = item;
  }

  customPop() {
    const length = this.array.length;
    if (length === 0) {
      return undefined;
    } else {
      const removedItem = this.array[length - 1];
      this.array.length = length - 1;
      return removedItem;
    }
  }
}

let inst = new NewClass();
inst.customPush(1);
inst.customPush(2);

const removedElement = inst.customPop();
console.log(removedElement);
console.log(inst.array);

// ---------------------------------------------------------------------------

class MyArray {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array[this.array.length] = value;
    return this.array.length;
  }

  pop() {
    this.isEmpty();
    return this.array.splice(this.array.length - 1, 1)[0];
  }

  max() {
    this.isEmpty();
    let max = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] > max) max = this.array[i];
    }
    return max;
  }

  min() {
    this.isEmpty();
    let min = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] < min) min = this.array[i];
    }
    return min;
  }

  isEmpty() {
    if (this.array.length == 0)
      throw new Error("You can't remove items from an empty array");
  }
}

let array1 = new MyArray();
array1.push(10);
array1.push(20);
array1.push(30);
array1.pop();
console.log(array1.array);
