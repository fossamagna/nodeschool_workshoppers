const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let currentValue = 1;
    return {
      next() {
        if (currentValue > max) {
          return {done: true};
        }
        let s = '';
        if (currentValue % 3 === 0) {
          s += 'Fizz';
        }
        if (currentValue % 5 === 0) {
          s += 'Buzz';
        }
        if (!s) {
          s = currentValue;
        }
        ++currentValue;
        return {done: false, value: s};
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
