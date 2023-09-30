const count = 10;
let acc = 0;
for (let val = 1; val <= count; val++) {
  acc += val;
}

const average = acc / count;
console.log(`average: ${average}`);