const Calculate = {
  factorial(n) {
    if (typeof n === "number") {
      const isNegative = n < 0 ? -1 : 1;
      n = n * isNegative;
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result * isNegative;
    } else {
      throw new Error("An error occurred. The provided data is not a number.");
    }
  },
};

module.exports = Calculate;
