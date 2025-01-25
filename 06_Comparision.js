// // ans in true or false
// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2<1)
// console.log(2<=1)

// // --------------------------
console.log('2' > 1)
console.log('02' > 1)

// // -------------------------------------
console.log(null > 0)
console.log(null >= 0)
console.log(null <= 0)
console.log(null == 0)
 
/* The reason is that an equality check == and comparisons > < >= <= work differently
Comparsion convert null to number, treating it as 0, 
That's wahy (2) null >= 0 is true and (1) null > 0 is false
*/


// so for these problems we use strick method its mean wo use === instead of ==

console.log('---------')
console.log('2' === 2)
