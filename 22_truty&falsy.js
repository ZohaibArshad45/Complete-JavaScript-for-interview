// falsy
// false , 0, -0, Nan, "", BigInt 0n, null, undefined

// truthy
// all other values

// let name = ''
let name = []
if(name){
    console.log('1 Condition is true')
}
else{
    console.log('1 Condition is false')
}


// string ky andr 0 ha tu truthy value ha "0"
// string ky andr space ha tu b truthy value ha " "
// string ky andr false likha ha tu b truthy value ha "false"
// {} => truthy
// [] => truthy
// function => truthy function(){}

let num = "0"
if(num){
    console.log('2 Condition is true')
}
else{
    console.log('2 Condition is false')
}

// ============ Arry ================
let arr = [2,3,5,6,7]
if(arr.length === 0){
    console.log('3 Condition is true')
}
else{
    console.log('3 Condition is false')
}

// =========== Object ================
// //  object to array covert
// const obj = { name: "Zohaib", age: 24, country: "Pakistan" };
// const keysArray = Object.keys(obj);
// console.log(keysArray); // Output: ["name", "age", "country"]

// // 2nd method object to array covert
// const obj = { name: "Zohaib", age: 24, country: "Pakistan" };
// const valuesArray = Object.values(obj);
// console.log(valuesArray); // Output: ["Zohaib", 24, "Pakistan"]


// 3rd method object to array covert
// const obj = { name: "Zohaib", age: 24, country: "Pakistan" };
// const entriesArray = Object.entries(obj);
// console.log(entriesArray); 
// // Output: [["name", "Zohaib"], ["age", 24], ["country", "Pakistan"]]


let obj = {
    name : "Zohaib",
    age : 12,
    city : "Lahore"
}
// Object.keys(obj) // we convert and the we put arr method on it
if(Object.keys(obj).length === 3){
    console.log('4 Condition is true')
}
else{
    console.log('4 Condition is false')
}

// =============================
false == 0 // true
false == '' // true
'' == 0 // true
if(false == ''){
    console.log('5 Condition is true')
}

// ==============================
// Nullish coalescing operator
let val1 
// val1 = 5 ?? 100
// val1 = null ?? 100
val1 = undefined ?? 100
val1 = undefined ?? 200 ?? 300
console.log(val1)

// ===========================
// terniary operator
// condition ? true : false
let age = 23
age >= 18 ? console.log('You can drive') : console.log('You can not drive')