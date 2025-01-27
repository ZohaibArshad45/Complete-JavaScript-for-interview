// // this keyword
// let obj1 = {
//     myname : 'Zohaib',
//     age : 22,

//     wellcome : function(){
//         console.log(`${this.myname}, wellcome `)
//     }
// }
// console.log(obj1.wellcome("sam"))


// different b/w Arrow Function	Normal Function ? VIP
// Normal Function
function cha(){
    console.log('Normal Function')
}
cha()

// Arrow Function
let chaa = () => {
    console.log('Arrow Function')
}
chaa()

// another way to write arrow function
let chaa2 = () => console.log('Arrow Function 2')
chaa2()

// more another way to write arrow function
let chaa3 = () => 'Arrow Function 3'
console.log(chaa3())

// more anthor way to write arrow function
// () ya use krny se return nh likhna parta inside ()
let chaa4 = () => ({name : 'Zohaib'})
console.log(chaa4())



// Immediately Invoked Function Expression (IIFE)

// (function chai(){
//     console.log('IIFE')
// })(); // if hum ; nh lagy tu it show us error, jb hum 2 IIFF function run kry gy

// (()=>{
//     console.log('IIFE 2')
// })()
