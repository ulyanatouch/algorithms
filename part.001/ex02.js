
const average = (items) => {
  const count = items.length;

  let result = 0;
  let index = 0;

  while (index < count) {
    result = result + items[index];
    index++;
  }
  return result / count;
}

const check = (items) => {
  return items.length !== 0;
}

const printItems = (items) => {
  console.log(items);
}

const printMessage = (message) => {
  console.log(message);
}

const printNumber = (number) => {
  console.log(number);
}

const arr = [1, 2];

if (check(arr)) {
  const res = average(arr);
  printNumber(res);
} else {
  printMessage("Array is empty");
}
