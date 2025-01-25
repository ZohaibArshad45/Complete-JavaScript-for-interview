/*
Primitive vs Non-Primitive data types, Heap and Stack memory, and Pass-by-value vs Pass-by-reference is key to mastering how data is stored, accessed, and manipulated. Here's a breakdown of each concept:
shallow copy, deep copy


================ Primitive vs Non-Primitive Data Types ===================

=============== Primitive Data Types ==============
These are basic data types that hold simple values and are immutable (cannot be altered (cannot changed)).

JavaScript has the following primitive types:
1. Number: Represents both integer and floating-point numbers. Example: `42`, `3.14`
2. String: Represents textual data. Example: `"Hello"`
3. Boolean: Represents logical values: `true` or `false`.
4. Undefined**: Represents a variable that has been declared but not assigned a value.
5. Null Represents the intentional absence of any object value.
6. Symbol: Introduced in ES6, it represents a unique identifier.
7. BigInt: Allows safe representation of integers larger than `Number.MAX_SAFE_INTEGER`.


============== Non-Primitive Data Types (Reference Types) =================
These are more complex data types, such as objects and arrays, that can store collections of data.

Common non-primitive types:
1. Object: Used to store collections of key-value pairs. 
Example:
const person = { 
                name: "Zohaib",
                age: 24 
                }

2. Array: A special type of object for storing lists. 
Example:
const numbers = [1, 2, 3, 4];

3. Function: Functions are first-class objects, meaning they can be treated as variables and passed around like any other data type.



========================== Heap and Stack Memory  ===========================
JavaScript uses two types of memory for storing data: **Stack** and **Heap**.

============= Stack Memory =============
1) It is used for storing **primitive data types** (number, string, boolean, etc.) and references to objects.
2) Stack operates on a **LIFO (Last In First Out)** principle. It is faster but limited in size.
3) Primitive values are stored directly in the stack.
Example: 
    let a = 10;
    let b = "Aliza";
    Here, `a` and `b` are stored directly in the stack.

=============== Heap Memory =======================
1) Used for storing **non-primitive data types** like objects, arrays, and functions.
2) It is slower but more flexible, allowing dynamic memory allocation.
3) Objects and arrays are stored in the heap, but their **references** (memory addresses) are stored in the stack.

    let person = { name: "Zohaib", age: 24 };
    The `person` object is stored in the heap, but the variable `person` holds a reference to it in the stack.


======================= Pass-by-Value vs Pass-by-Reference ================

========== Pass-by-Value ===============
1) This applies to **primitive data types**.
2) When you pass a primitive value to a function, a **copy** of that value is made.
3) The original value is not modified by changes made inside the function.

Example:
    let x = 10;
    function changeValue(val) {
        val = 20;
    }
    changeValue(x);
    console.log(x); // Output: 10 (unchanged)


========= Pass-by-Reference =============
1) This applies to **non-primitive data types** (objects, arrays).
2) When you pass a reference type (like an object or array) to a function, the function receives a **reference** to the original memory location.
3) Changes made to the object inside the function will affect the original object.

Example:
    let obj = { name: "Zohaib" };
    function changeName(o) {
        o.name = "Aliza";
    }
    changeName(obj);
    console.log(obj.name); // Output: "Aliza" (original object changed)


====================== In summary ====================
Primitives (stored on the stack) are immutable and passed by value.
Non-primitives (stored on the heap) are mutable and passed by reference.



==============================Shallow and deep copy =====================
A Shallow copy of an object is a copy where properties the same
reference (change the copy also change the orginal)


A Deep copy of an object is a copy where properties do not share the same
reference,

*/