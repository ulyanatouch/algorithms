let number = 147;

let result = true;
for (let current = 2; current <= Math.sqrt(number); current++) {
  if (number % current == 0) {
    console.log(current);
    result = false;
    break;
  }
}

console.log(`result ${number}: ${result}`);