function findKthElement(arr1, arr2, k) {
  let i = 0;
  let j = 0;
  let count = 0;
  let result = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result = arr1[i];
      i++;
    } else {
      result = arr2[j];
      j++;
    }
    count++;

    if (count === k) {
      return result;
    }
  }

  while (i < arr1.length) {
    result = arr1[i];
    i++;
    count++;
    if (count === k) {
      return result;
    }
  }

  while (j < arr2.length) {
    result = arr2[j];
    j++;
    count++;
    if (count === k) {
      return result;
    }
  }

  return result;
}

const array1 = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];
const k = 6;

const kthElement = findKthElement(array1, array2, k);
console.log("К-й элемент:", kthElement);
