
// convert string into number

console.log('String to Number ---------------------- ')
let a = '23'
console.log(a)
console.log(typeof a)

let b = Number(a)
console.log(b)
console.log(typeof b)


// ----------------------------------------
console.log('Wrong String to Number --------------- ')
let c = '56ac'
console.log(c)
console.log(typeof c)
let d = Number(c) // asi  string number ma convert nh ho gi
console.log(d) // console ma NAN show kry ga
console.log(typeof d) // type number ay gi


// ------------ VIP ---------------------
console.log('Null to Number -------------------------  ')
let e = null
console.log(e);
console.log(typeof e)
let f = Number(e) 
console.log(f) // console ma 0 show kry ga
console.log(typeof f) // type number ay gi


// ---------------------------------------
console.log('undefined to Number --------------------  ')
// undefined undefined hi show kry ga
let g = undefined
console.log(g);
console.log(typeof g)
let h = Number(g) 
console.log(h) // console ma undefined show kry ga
console.log(typeof h)



// we can also convert Number to string , String tu Number, Number tu boolen
// '22' => 33
// '23df' => NaN
// null => 0
// undefined => NaN
// 1 => true ; 
// 0 => false
// "" => false
// "kuchbhi" => true 

