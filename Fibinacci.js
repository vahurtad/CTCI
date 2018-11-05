function fibonacci2(i) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  return fibonacci2(i - 1) + fibonacci2(i - 2);
}

// let q = fibonacci2(5);
// console.log(q)

const fibonacci = (() => {
  const memo = {};
  return function fib(n) {
    return n in memo
      ? memo[n]
      : (memo[n] = (n < 2 ? n : fib(n - 1) + fib(n - 2)));
  };
})();
console.log(fibonacci(5));
