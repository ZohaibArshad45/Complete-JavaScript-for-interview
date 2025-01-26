// ============ Function =============
// functions are fundamental building blocks. They are reusable blocks of code that perform a specific task.

// ============ 1 simple function 1 =============
function fun1(){
    console.log("Simple Function 1")
}
fun1()

// ============ 1. Function Declaration ==========
// A function is defined using the function keyword and has a name.
function fun2(name) {
    console.log(`Hello, ${name}!`);
}
fun2("Zohaib"); // Output: Hello, Zohaib!


// ========= 2. Function Expression ==========
// A function can be assigned to a variable. This is called a function expression.
const fun3 = function(name) {
    console.log(`Hello, ${name}!`);
};
fun3("Zohaib"); // Output: Hello, Zohaib!


// ========== 3. Arrow Function (ES6) =============
// A concise way to write functions using the => syntax.
const fun4 = (name) => {
    console.log(`Hello, ${name}!`);
};
fun4("Zohaib"); // Output: Hello, Zohaib!


// ========== 4. Async Function ===========
// Functions that allow asynchronous operations using async and await.
const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await data.json();
    console.log(result);
};
fetchData();

// ============ 5 Default Parameters ==========
// Functions can have default values for parameters.

function fun5(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
fun5();          // Output: Hello, Guest!
fun5("Zohaib");  // Output: Hello, Zohaib!
