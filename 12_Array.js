
let arr1 = [1,23,4,54,46,3,89, true, 'Zohaib']
console.log(arr1)

console.log(arr1[3])

// ====> add value in last
// push
arr1.push(100)
arr1.push(90)
console.log(arr1)

// ===> remove value from last
// pop
arr1.pop()
console.log(arr1)

// add in first
// unshift
arr1.unshift(55)
arr1.unshift(500)
arr1.unshift("OK")
arr1.unshift("hello")
arr1.unshift("World")
arr1.unshift("Bye")
console.log(arr1)

// remove in first
// shift
arr1.shift()
console.log(arr1)

// =======================================
// methods
let arr2 = [1,23,4,54,46,3,89, true, 'Zohaib']


console.log('------------------------------')
console.log(arr2.includes(500))
console.log(arr2.indexOf(500))
console.log(arr2.indexOf(3))


// ==================== Join ==================
// by join method we can convert arry to string
let arr3 = [1,23,4,54,46,3,89, true, 'Zohaib']

let newArr = arr3.join()
console.log(arr3)
console.log(newArr)
console.log(typeof newArr) // by joining its type change to string


// ========== VIP for Interview =======
// =========== Slice , Splice ===========
let arr4= [1,23,4,54,46,3,89, true, 'Zohaib']
console.log('A', arr4)

// slice
// slice me kaha sy kaha tk arry lani ha
// slice ma arrange include nh hoti
let sliceArr = arr4.slice(1,3)
console.log('Slice',sliceArr)
console.log('B', arr4)

// splice
// VIP for interview
// splice value nikalny ky sath sath origanl arrary ko b change kr data ha
// splice ma arrange include hoti
let spliceArr = arr4.splice(1,3)
console.log('Splice',spliceArr)
console.log('C', arr4)


// ============== vip   ===================
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


