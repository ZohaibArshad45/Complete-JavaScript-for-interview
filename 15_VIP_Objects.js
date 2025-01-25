// //const newObj = new Object() // its singleton object

// const newObj2 = {} // its non singleton object

// // as we make it empty object
// newObj2.name = 'Zohaib'
// newObj2.age = 23
// newObj2.isLogin = true

// console.log(newObj2) //
// console.log(newObj2.name)

// how we can get output only keys
// let keys = Object.keys(newObj2)
// console.log(keys)

// how we can get output only values   
// let values = Object.values(newObj2)
// console.log(values)

// hasOwnProperty
// let isExist = newObj2.hasOwnProperty('name')
// console.log(isExist)

// entries // make all object to array, but only keys and values
// let entries = Object.entries(newObj2)
// console.log(entries)

// =============== object inside object ==============
let obj4 = {
    name : 'kew btao ma',
    fullname :{
        username : 'Umer Arshad',
        emailId : 'umer@gmail.com'
    }
}
console.log(obj4.fullname.emailId)

//  ============= how we join two objects ===============
let obj5 = {
    name : 'Umer',
}
let obj6 = {
    age : 23
}
let obj7 = {
    isLogin : true
}

// its wrong way to join two objects
// let obj8 = {obj5, obj6, obj7}
// console.log(obj8)

// its right way to join two objects
// let obj9 = Object.assign( obj5, obj6, obj7)
// let obj9 = Object.assign({}, obj5, obj6, obj7)
let obj9 = {...obj5, ...obj6, ...obj7}
console.log(obj9)