// singleton == bd ma parhy gy
// Object.create


// object literal
let obj = {
    name : 'Zohaib',
    age : 23,
    isStudent : true,
    lastLogin : ['Monday', 'Tuesday', 'Wednesday'],
    "full name" : 'Zohaib Arshad' // this is access by only bracket notation
}

console.log(obj)
console.log(obj.name) // dot notation
console.log(obj['name']) // bracket notation
console.log(obj['full name'])


console.log(obj["lastLogin"])
console.log(obj.lastLogin)
console.log(obj.lastLogin[2]) // this is access by only dot notation


// console.log(`My name is ${obj.name}, age ${obj.age} and my full name is ${obj['full name']} and my last login is ${obj.lastLogin[2]} and yes i am a student ${obj.isStudent}`)


// ===================== VIP for interview =====================
// // how we use symbol in object

// let sym = Symbol('key1')
// let obj2 ={
//     [sym] : 'Zara'
// }
// // console.log(obj2)
// console.log(obj2[sym]) // this is access by only bracket notation


// ===================== replace and freeze =====================

// let obj3 = {
//     name : 'Ali',
// }
// console.log(`Before Replace ${obj3.name}`)
// obj3.name = 'Zohaib' // this is replace
// console.log(`After Replace ${obj3.name}`)
// obj3.fName = 'Arshad' // add new property
// console.log(`After Add new ${obj3.fName}`)
// console.log(obj3) // { name: 'Zohaib', fName: 'Arshad' }

// obj3 = Object.freeze(obj3) // this is freeze
// obj3.name = 'Aliza' // after freeze we can not change
// console.log(obj3.name)   // its show us error


// ================== Add function in object =================
let obj4 = {
    name : 'Umer',
}

obj4.greet = function(){
    // console.log("Hello")
    console.log(`Hello ${this.name}`)
}

console.log(obj4.name) 
console.log(obj4.greet()) // it also show us undefined

