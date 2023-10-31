alert("Some strict");

function iUseStrictMode() {
  strict = "use strick mode";
  console.log("i will " + strict);
}

function iDontUseStrickMode() {
  noStrict = "not use strict mode";
  console.log("i will " + noStrict);
}

iUseStrictMode();
iDontUseStrickMode();

function sum(firstnum, secondnum, thirdnum) {
  return firstnum + secondnum + thirdnum;
}

console.log(sum(2, 5, 6));


'use strict'; // if i will not use strict i will not get error if i use strict i get error of octal literals are not allowed
const oct = 051;
console.log(oct);

// in summary use strict is a tehcnique where u will know what is the error and set rules and error handling