var sum = process.argv
                 .slice(2)
                 .map(function (e) {
                   return +e;
                 })
                 .reduce(function (previousValue, currentValue, index, array) {
                   return previousValue + currentValue;
                 }, 0);

console.log(sum);
