// ----------------- Primitive --------------------
// its give us copy of data type, jo b hum copy ma change kry gy wo sirf copy ma change ho ga 

// 7 Types : String, Number , Boolearn, Null, Undefined, Symbol, BigInt

let a =23
let b= a
console.log(`Befor change : ${a}`)
console.log(`Befor change : ${b}`)

b= 25
console.log(`After change : ${a}`)
console.log(`After change : ${b}`)


// ---------------------- Reference (non-Primitive)  -----------
// Array , Object , Functions 
// typeof of Reference is object ,
// Typeof array is object
// Typeof obejct is object
//  function ka funtion but we called it object function

let arr = [2,4,4,5,5,6]
console.log(typeof (arr)) // object , null ka b type object ata h

// Function
let myFucntion = function(){
    console.log('Function Run')
}
myFucntion()
console.log(typeof myFucntion)

// Object 
 let myObject = {
    name : 'Zohaib',
    rollNumner : 23,
    Clog : 'IUB'
 }
 console.log(myObject.name)
console.log(`Type of myObject is ${typeof myObject}`)

