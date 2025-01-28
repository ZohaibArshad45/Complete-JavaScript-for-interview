// // for loop
// for(let i= 0; i<10 ; i++){
//         console.log(i)
// }


// // while loop 
// let i = 0
// while (i<10) {
//     console.log(i)
//     i++
// }


// // for of loop
// const arr = [1,2,3,4,5]
// for (const j of arr) {
//     console.log(j)
// }

// const stringw = 'Zohaib'
// for (const j of stringw) {
//     console.log(j)
// }

// // for in loop
// const obj = {
//     name : 'Zohaib',
//     age : 23,
//     isStudent : true,
//     lastLogin : ['Monday', 'Tuesday', 'Wednesday'],
//     "full name" : 'Zohaib Arshad' 
// }
// for (const j in obj) {
//     // console.log(j) // for key
//     console.log(obj[j]) // for value
// }


// // foreach loop
// const arr3 = [1,2,3,4,5]
// arr3.forEach(function(val){
//     console.log(val)
// })

// ============================================

let arr5 = [
    {
        username : 'Zohaib',
        age : 23
    },
    {
        username : 'Ali',
        age : 34
    },
    {
        username : 'Ahmad',
        age : 234
    },
    {
        username : 'Arslan',
        age : 22
    },
    {
        username : 'Shoaib',
        age : 25
    },
    {
        username : 'Shami',
        age : 20
    },
]

arr5.forEach(function(val){
    console.log(`My Name is ${val.username} and my age is ${val.age}`)
})

// ============================================
// vip , foreach return value nh krta 🤦‍♂️😪😓
// so return value ky lia filter use krta ha
let arr6 = [1,2,3,4,5,6,7,8,9,10]

let ans = arr6.filter((val)=>{
    return val > 5 // condition
})
console.log(ans)

// ===========================================
// map
let arr7 = [1,2,3,4,5,6,7,8,9,10]

let ans2 = arr7.map((val)=>{
    return val + 2
})
console.log(ans2)

// reduce
let arr8 = [1,2,3,4,5,6,7,8,9,10]
let sum = arr8.reduce((acc,cur)=>{
    return acc + cur
}, 0)
console.log(sum)


