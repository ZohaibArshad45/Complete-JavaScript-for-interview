// let fun1 = (num1,num2)=>{
//     console.log("Simple Function 1")
//     let num3 = num1+num2
//     console.log(num3)
// }
// fun1(2,7)

// =================================
// if we want to return value then use return 
// return value(outside of the function)
let fun2 = (num1,num2)=>{
    let num3 = num1+num2
    return num3   
}
// console.log(fun2(2,7)) // 1st method
let res = fun2(2,7) // 2nd method
console.log(res)

// ============================
let fun6 = (username)=>{
    // console.log(` wellcome ${username}`)
    return `wellcome ${username} `
}
// fun6("Zohaib")
// console.log(fun6("Ali"))
let name = fun6("Ali")
console.log(name)