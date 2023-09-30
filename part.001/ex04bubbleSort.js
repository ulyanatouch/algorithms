const bubbleSort = (items) => {
  const length = items.length;
  let count = 0;
  for (let j = 0; j < length - 1; j++) {
    for (let i = 0; i < length - 1 - j; i++) {
      if (items[i] > items[i + 1]) {
        let t = items[i];
        items[i] = items[i + 1];
        items[i + 1] = t;
        count++;
      } else {
        count++;
      }
      console.log(`>> j: ${j} [${array}]`);
    }
  }
  console.log(`count = ${count}`);
}

const array = [3, 0, 5, 1, 4];
console.log(`before: ${array}`);
bubbleSort(array);
console.log(`after: ${array}`);
