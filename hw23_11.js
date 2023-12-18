const getCoins = (sum, coins) => {
  const dp = new Array(sum + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= sum; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        const remainder = i - coins[j];
        if (
          dp[remainder] !== Number.MAX_SAFE_INTEGER &&
          dp[remainder] + 1 < dp[i]
        ) {
          dp[i] = dp[remainder] + 1;
        }
      }
    }
  }

  if (dp[sum] === Number.MAX_SAFE_INTEGER) {
    return "Невозможно разменять данную сумму";
  }

  const result = [];
  let remaining = sum;
  while (remaining > 0) {
    for (let i = 0; i < coins.length; i++) {
      if (
        remaining >= coins[i] &&
        dp[remaining - coins[i]] === dp[remaining] - 1
      ) {
        result.push(coins[i]);
        remaining -= coins[i];
        break;
      }
    }
  }

  return result;
};

const main = () => {
  const penny = [1, 3, 4, 2];
  const amount = 5;
  const res = getCoins(amount, penny);
  console.log(res);
};

main();
