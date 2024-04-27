// function sum(a, b) {
//     return a + b;
// }

// arrow functions don't have their own conext ('this')
exports.sum = (a, b) => a + b;

// module.exports = {
//     sum,
// };

//console.log('process: ', process);
// prints:  exports: { sum: [Function: sum] },
