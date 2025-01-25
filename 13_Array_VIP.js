let Mc = ['ironman', 'spiderman', 'thor']
let Dc = ['flash', 'badman', 'superman']

// // its wrong to join to arrays
// Mc.push(Dc) // is tar arry ky andr ek arr push ho jye gi
// console.log(Mc) 
// console.log(Mc[2]) 
// console.log(Mc[3]) // qk aur push arry ko ek hi lata ha, is lia puri array show krta ha
// console.log(Mc[3][1]) // 3 ma index ko 1 ma index ko value show krta ha

// // is tar jo arry ky andr arr push ho gi wo single arr ban jati ha
// const make_it_single  = Mc.flat(Infinity) 
// console.log(make_it_single)
// console.log('----------------') 


//When you use push() to add an array to another array, the entire second array is pushed as a single element.
// Key Points:
// push() modifies the original array.
// The added array becomes a nested array, resulting in a multidimensional array.



// ================= VIP ==============
//  ============ concat ============
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//The concat() method combines two arrays into a new array, without nesting. It does not modify the original arrays.

// Key Points:
// concat() creates a flat array by merging elements from both arrays.
// Original arrays (Mc and Dc) remain unchanged.
let All_heros = Mc.concat(Dc)
console.log(All_heros)


// ==================== Join = Arry to string ==================
// by join method we can convert arry to string
// join not use for join two arrays
// it just use to convert array to string
// not change original array
let arr3 = [1,23,4,54,46,3,89, true, 'Zohaib']

// let newArr = arr3.join()
let newArr = arr3.join('-')
console.log(arr3)
console.log(newArr)
console.log(newArr[7])
console.log(typeof newArr) // by joining its type change to string


// ============== Split = Stirng to Array  ============
//split
// its method use to convert stirng to array
const newName3 = new String (" kia-hall-hai-bhai")
console.log(newName3.split('-'))

const str = "apple";
const result = str.split("");  // No separator, so it splits into individual characters
console.log(result);

// we can also set limit on it
const str2 = "apple,banana,cherry,dates";
const result2 = str2.split(",", 3); // Limit set to 3 splits
console.log(result2);


// ===========================================================================
// isArray 
console.log(Array.isArray("Zara"))

// from ==> is use to convert in array
console.log(Array.from("Zara"))
console.log(Array.from({name : "Zara"})) // vip // its show empty bcz humy batany ki zarort ha ky keys ki or value ki bani ha ,


// // .of returen a new array from a set of elements
let score1 = 100
let score2 = 200
let score3 = 300
console.log([score1, score2, score3])
// correct way 
console.log(Array.of(score1, score2, score3))
