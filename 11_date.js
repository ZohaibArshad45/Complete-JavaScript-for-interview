let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())

// date ka type object ha
console.log(typeof(mydate))


let myCreateData = new Date(2024, 10, 19)
console.log(myCreateData.toDateString())

let myCreateData2 = new Date('01-13-2024')
console.log(myCreateData2.toDateString())


// ================================
// comparison tow date
let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(myCreateData2.getTime())

// convert in second (vip interview question
console.log(Date.now()/1000) // its vlaue in points so we use floor or round or ceil
console.log(Math.floor(Date.now()/1000))
console.log(`Date in second now is  ${Math.floor(Date.now()/1000)}`)

// ====================================
let newdate = new Date()
console.log(newdate.getFullYear())
console.log(newdate.getHours())
console.log(newdate.getMonth())
console.log(newdate.getTime())
console.log(newdate.getSeconds())
console.log( new Date().getSeconds())
