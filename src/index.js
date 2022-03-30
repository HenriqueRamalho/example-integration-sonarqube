const sum = require('./sum');

var square = function (n) {
    return n * n;
}

function fatorial(n){
    if ((n == 0) || (n == 1))
      return 1;
    else
      return (n * fatorial(n - 1));
}

console.log(sum(2, 2))