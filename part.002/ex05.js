let n = 5;
let acc = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j *= 2) {
    acc += 1;
  }
}

console.log(`acc: ${acc}`);