// There are eight basic data types in javascript

// no error
let message = "hello";
 message = 123456;
message = 1;
// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: 

// Infinity, -Infinity and NaN.∞,

alert(1/0); //represents infinity
alert(infinity); //represents also infinity
alert("not a numeber" / 2); //represents NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

BigInt
console.log(BigInt);
console.log(9007199254740991 + 1);