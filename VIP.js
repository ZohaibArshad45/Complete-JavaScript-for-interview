// ForEach, map, Filter, find, findIndex, Indexof, Object, Function, async

// // =========================== forEach ========================================================
// // Array
// // ForEach
// let arr = [1,2,3,4, 'Zohaib',5,6 ]

// arr.forEach(function(val){
//     console.log( val)
// })

// arr.forEach(function(val){
//     console.log("Sum " + val + 5)
// })

// // =========================== Map ========================================================
// // Map ==> ya old arry ko nh chnge krta , balky ek new arry bana data ha

// let arr = [1,2,3,4, 'Zohaib',5,6 ]

// // arr.map(function(val){
// //     console.log(val +5)
// // })
// // console.log(arr)

// let newarr = arr.map(function(val){
//     return val + 100
// })

// console.log(newarr)
// console.log("New array ==> " + newarr)
// console.log(arr)
// console.log("Old array ==> " + arr)


// // =========================== filter ========================================================
// let arr = [1,2,3,4, 'Zohaib',5,6 ]

// let ans = arr.filter(function(val){
//     if(val >= 2) { return true; }
//     else return false
// })
// console.log(ans)

// // filter with arrow function
// let arr = [1, 2, 3, 4];
// let filteredArray = arr.filter((val) => val > 2);
// console.log(filteredArray); // Output: [3, 4]


// // =========================== find ========================================================
// let arr = [1,2,3,4, 'Zohaib',5,6 ]

// let ans = arr.find(function(val){
//     if (val === 'Zohaib'){
//         // return true
//         return val
//     }
//     else return false
// })
// console.log(ans)


// // =========================== findindex ========================================================
// let arr = [1,2,3,4, 'Zohaib',5,6 ]

// let ans = arr.findIndex(function(val){
//     if (val === 'Zohaib'){
//         return val
//     }
// })
// console.log(ans)

// // ===========================  Index of ========================================================
// let arr = [1,2,3,4, 'Zohaib',5,6 ]
// let new2 = arr.indexOf('Zohaib')
// console.log(new2)


 
// // =========================== Object ========================================================
// obj = {
//     name : "Zohaib",
//     age : 12,
//     clg : "IUB",
//     year : 2024,
//     Gender : "Male"
// }

// // obj.age = 25 // is tar obj ki vale change kr sakhty ha,
// // console.log (obj.age)

// // Object.freeze(obj) // is tar object ky andr  ki vale change huny sy ruk sakhty hai,
// // obj.age = 230
// console.log (obj.name)
// console.log (obj.age)



// // =========================== function ========================================================

// function abcd(a,b,c,d,e){
//     console.log(a ,b,e + 130)
// }
// abcd(1,23,5,6,55)
// // console.log(abcd.length) // function ki length krny ky lia 


// // =========================== async js ========================================================

// async function abcd (){
//     var blob = await fetch(`https://randomuser.me/api`)
//     var ans = await blob.json()
//     console.log(ans)
//     // console.log(ans.results[0].name)
// }
// abcd()



