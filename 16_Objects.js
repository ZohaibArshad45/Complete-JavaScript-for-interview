// ============ Object Destructuring ============ 
// Destructuring ka fayda yeh hai ke aap ek hi line mein object (ya array) ke multiple properties ko variables mein assign kar sakte hain. Aapka original code 3 alag-alag lines mein properties ko assign kar raha tha, jab ke destructuring ke saath yeh kaam ek line mein ho jata hai. 😊

const user = {
    name: "Zohaib",
    age: 23,
    isLogin: true
};

// Destructuring the object
const { name, age, isLogin } = user;

console.log(name);    // Output: Zohaib
console.log(age);     // Output: 23
console.log(isLogin); // Output: true



// ==================== Default Values ================
// If a property is missing, you can assign a default value.

const user2 = { name: "Zohaib" };
const { name2, age2 = 25 } = user;

console.log(name); // Output: Zohaib
console.log(age);  // Output: 25 (default value)


// ================= Renaming Variables ==========================
// You can rename variables while destructuring.

const user3 = { name3: "Zohaib", age3: 23 };
const { name3: fullName, age3: userAge } = user3;

console.log(fullName); // Output: Zohaib
console.log(userAge);  // Output: 23

// =========== VIP === Object Nested Destructuring ===============
// You can destructure nested objects

const user5 = {
    name5: "Zohaib",
    address5: {
        city5: "Karachi",
        country5: "Pakistan"
    }
};

const { address5: { city5, country5 } } = user5;

console.log(city5);    // Output: Karachi
console.log(country5); // Output: Pakistan


// ================================================================
// ========================= Array =======================================
// ================= Array Destructuring ==============================
// Array destructuring allows you to extract values from an array and assign them to variables.

// Original Array
const colors = ["Red", "Green", "Blue"];

// Destructuring the array
const [first, second, third] = colors;

console.log(first);  // Output: Red
console.log(second); // Output: Green
console.log(third);  // Output: Blue

// =========== Skipping Elements ============
// You can skip elements by leaving an empty comma.

const numbers = [1, 2, 3, 4];
const [first1, , third1] = numbers;

console.log(first1);  // Output: 1
console.log(third1);  // Output: 3


// ===========  Default Values ==========
// If an element is missing, you can assign a default value.

const numbers3 = [1];
const [first3, second3 = 10] = numbers3;

console.log(first3);  // Output: 1
console.log(second3); // Output: 10 (default value)

// =========== VIP === Array Nested Destructuring ===============
// You can destructure nested Array
const numbers4 = [1, [2, 3], 4];
const [first4, [second4, third4]] = numbers;

console.log(first4);  // Output: 1
console.log(second4); // Output: 2
console.log(third4);  // Output: 3