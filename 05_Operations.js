// operations
console.log(5+2)
console.log(5-2)
console.log(5*2)
console.log(5**2)
console.log(5/2)
console.log(5%2)


// ------------------------- Join String ------------------
let str1 = "Zohaib "
let str2 = "Arshad"

let str3 = str1 + str2
console.log(str3);

// ---------------------- VIP -------------------
// jo phly wohi ho ga
console.log("1" + 2); //12
console.log("1" + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + '2'); // 32
console.log("1" + 2); //12

console.log( (3 + 4) * (25 / 5));

// -------------------------- ++ ----------------------
let GameCounter = 100
++GameCounter
console.log(GameCounter);


// postfix
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"


// prefix
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
