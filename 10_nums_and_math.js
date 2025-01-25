const num1 = 100
console.log(num1)

// best way to make number
const num2 = new Number(200.89034)
console.log(num2)

// number to string convert
console.log(num2.toString())

// ab string ban gya tu string ky mathod b ajye gy
console.log(num2.toString().length)

// fixed ==> mostly use in e-commerce projects
console.log(num2.toFixed(2)) //output = 200.00 

// toPrecision == round off kr ky value data ha
console.log(num2.toPrecision(4))

// 1,000,000 asy likhny ky lia
// toLocalString()
const num3 = 10000000
console.log(num3.toLocaleString()) // 10,000,000
console.log(num3.toLocaleString('en-IN'))// 1,00,00,000 // indina tariky sy


// ============================================================
// math
const num4 = -432.56

//math.abs ===== -ve value to positive ma convert krny lia use hota ha
console.log(Math.abs(num4)) 
console.log(Math.round(num4))
console.log(Math.ceil(num4)) // thora sa b zada howa tu next number show krda dy ga, 
console.log(Math.floor(num4)) // nechy wala hi show kry ga hmasha

console.log(Math.min(4,5,7,2,9,10))
console.log(Math.max(4,5,7,2,9,10))


/// vippppppppppp
console.log(Math.random())

// agr hum arrange ma dy gy tu    ======== Math.floor(Math.random()*10)+1
// ============== VIP ===========

console.log('==========Arrange ma dana ho tu ===============')
// console.log((Math.random()*10)+1)

const max = 65
const min = 12

console.log(Math.round(Math.random()*(max - min + 1)) + min)
