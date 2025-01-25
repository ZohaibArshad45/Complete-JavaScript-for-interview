const name = 'Zohaib'
const myName = new String("Zohaib-Arshad") //best way to make string
console.log(myName[2])
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(`to lower case ${myName.toLowerCase()}`)
console.log(myName.charAt(3))
console.log(myName.indexOf('a'))
console.log(myName.substring(0,4))
console.log(myName.slice(0,4))
console.log(myName.slice(-10,-1)) // slice ma -ve value b di ja sakhti ha


//trim // trim is use to remove exrat space
const newName2 = new String("   Spacehai    ")
console.log(newName2)
console.log(newName2.trim()) //trim is use to remove exrat space


//replace
// mostly ues in url
const url = new String('my name is zabii')
console.log(url.replace('zabii', 'replce'))


// includes
console.log(url.includes("zabii"))

// ============== vip   ============
//split
// its method use to convert stirng to array
const newName3 = new String (" kia-hall-hai-bhai")
console.log(newName3.split('-'))

const str = "apple";
const result = str.split("");  // No separator, so it splits into individual characters
console.log(result);

// we can also set limit on it
const str2 = "apple,banana,cherry,dates";
const result2 = str2.split(",", 3); // Limit set to 3 splits
console.log(result2);




const age = '22'
const clg = "IUB"

//old way to join string
// console.log(name +  age + clg)

//new way, 
// we can also define method in like name.touppercase
console.log(`My name is ${myName.toUpperCase()}, age ${age} and my Uni name is ${clg}`);
 


const Name = new String("Zabi")
