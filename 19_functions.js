// ========= VIP ====== Rest parameter ============
// agr hum cart ma kuch add krna ho aur humay pta na ho ky kitany number add huny ha tu hum ... use krty ha

const add1 = (...num1) => {
    console.log(num1)
}
add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//Explanation:
// The rest parameter (...num1) gathers all the arguments passed into the function and puts them into an array called num1.
// The console.log(num1) statement will display this array.


const add2 = (...num2) => {
    console.log(num2)
    let sum = 0
    for (let i = 0; i < num2.length; i++) {
        sum += num2[i]
    }
    return sum
}
console.log(add2(1, 2, 34, 4, 45, 66, 13, 8, 29, 10))