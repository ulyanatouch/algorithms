let n = 5;
let acc = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    acc += 1;
  }
}

console.log(`acc: ${acc}`);