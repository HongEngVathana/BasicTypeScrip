"use strict";
//1 about DataType
//2 about Array
//3.Tuple
//4.Object Type
//5.Enums
//6.Type Aliases
//7.Type Scrip Umion Types
//8.Function
//1=======================================Data Type==========================================
// Number
let integer = 42;
let float = 3.14;
let hex = 0x2a;
let binary = 0b1010101;
let octal = 0o52;
console.log("Integer:", integer);
console.log("Float:", float);
console.log("Hexadecimal:", binary);
console.log("Octal:", octal);
//string
let singleQuote = "Hello"; // i use command +s ''=>""
let doubleQuote = "World";
let templateLiteral = `Hello ,${doubleQuote}`;
console.log("Single Quote:", singleQuote);
console.log("Double Quote:", doubleQuote);
console.log("Teplate Literal:", templateLiteral);
//boolean
let isActive = true;
let isCompleted = false;
console.log("isActive:", isActive);
console.log("isCompleted:", isCompleted);
//Array
let numberArray = [1, 2, 3, 4, 5, 6];
let stringArray = ["one ", "two", "three"];
console.log("Number Array:", numberArray);
console.log("String Array:", stringArray);
//Tuple
let tuple = ["Vathana", 19];
console.log("Tuple", tuple);
console.log("Name:", tuple[0]);
console.log("Age:", tuple[1]);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Green;
console.log("Enum Color:", color);
//Any
let randomValue = 10;
console.log("Any (umber):", randomValue);
randomValue = "Hello";
console.log("Any(strig):", randomValue);
randomValue = true;
console.log("Any()boolean:", randomValue);
function logMessage() {
    console.log("This function returns no value");
}
logMessage();
//Null and Undefined
let undefinedValue = undefined;
let nullValue = null;
console.log("Undefined:", undefinedValue);
console.log("Null", nullValue);
//object
let person = {
    name: "Vathana",
    age: 19,
};
console.log("Object", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
//Never
function throwError(message) {
    throw new Error(message);
}
//Union Types
let unioneType;
unioneType = 20;
console.log("Union Type (Number):", unioneType);
unioneType = "Hello";
console.log("Union Type (String)", unioneType);
let Employee = {
    name: "Makara",
    age: 18,
    employeeID: 101,
    department: "CS",
};
console.log("Intersection Type:", Employee);
let value;
value = "Hello";
console.log("Type Alias (string:", value);
value = 123;
console.log("Type Alias (number):", value);
//Literal Types
let literlTyope;
literlTyope = "start";
console.log("Liter Type:", literlTyope);
//Unknown
let unknownType = 4;
console.log("Unknown (number):", unknownType);
unioneType = "Could be anything";
console.log("Unknown (string):", unioneType);
//2.=======================================================Array=============================================
//1 . Basic Array
//array number
let number1 = [1, 2, 3, 4, 5, 6];
//array string
let username = ["A", "B", "C"];
//2. Array Using the`Array`Generic
let number2 = [1, 2, 3, 4, 5, 5, 6, 7];
let username2 = ["A", "B", "C"];
//This is equivalent to the basic array syntax but uses Array<type> instead of type[].
//3. Multidmensional Arrays
let matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];
let people = [
    { name: "Vathana", age: 19 },
    { name: "Makara", age: 18 },
];
//In this example, people is an array of Person objects, where Person is a custom type with properties name and age.
//5.Readonly Arrays
let reaonlyNumbers = [1, 2, 3, 4, 5];
//Attempting to change the contents of readonlyNumbers (e.g., readonlyNumbers.push(6)) will result in a compile-time error.
//6. Tuple Arrays
let Employee1 = [1, "makara"];
//Here, employee is a tuple that must have a number as the first element and a string as the second element.
//7. Union Type Arrays
let mixeArray = [1, "one", 3, "three"];
//In this example, mixedArray can contain both numbers and strings.
//8/Array of Any Type
let randomValue1 = [1, "Hello", true, { name: "Makara" }, [2, 3, 4]];
//The randomValues array contains a number, a string, a boolean, an object, and another array.
//9. Array Using `Array Constructor`
let fruits = new Array("Vathana", "Makara", "Hong");
//his is less common than using the literal syntax but is available if you prefer this style.
//10 Array with Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergeArray = [...arr1, ...arr2];
console.log(arr1);
//The mergedArray is a combination of arr1 and arr2.
//================================================Tuple============================================
//3 Tuples
// 1. Basic Tuple
let tuple1;
tuple = ["Hello", 42];
//A basic tuple has a fixed length and defined types for each element.
//2.Optional Elements in Tuples
let optionalTuple;
optionalTuple = ["Vathana"];
optionalTuple = ["Vathana", 19];
//Tuples can have optional elements using the ? syntax.
//3. Rest Elements in Tuples
let restTuple;
restTuple = ["Vathana"];
restTuple = ["Hello", 42, 34, 56];
//TypeScript 4.0 and later supports rest elements in tuples, allowing the definition of tuples with a variable number of elements of a specific type.
//4. Readonly Tuples
let readonlyTuple = ["HongEngVathana", 19];
//Tuples can be marked as readonly to prevent modification after creation.
//5. Labeled Tuples
let LabeledTuple;
LabeledTuple = ["Vathana", 19];
//TypeScript allows labeling tuple elements for better readability.
//6. Nested Tuples
let nestedTuple;
nestedTuple = ["Point", [20, 20]];
console.log(nestedTuple);
//Tuples can be nested, meaning a tuple can contain other tuples as elements.
//7. Tuple with Union Types
let unionTuple;
unionTuple = ["Vathana", 10];
console.log(unionTuple);
// unionTuple = ["Vathana", true];
//8 Tuple with Heterogenneous Types
let heterogeuusTuple;
heterogeuusTuple = [1, "Vathana", true];
console.log(heterogeuusTuple);
//A tuple can hold elements of different types, making it a heterogeneous tuple
//9. Tuple with Dyn=namic Length using rest Elements
let dynamicLengTuple;
dynamicLengTuple = ["Number", 1, 2, 3, 4];
dynamicLengTuple = ["Only string"];
console.log(dynamicLengTuple);
//In this example, Point and Line are type aliases that make the code more readable and reusable.
//10/Utility Types
//Partial<T>: Makes all properties of T optional.
//Required<T>: Makes all properties of T required.
//Readonly<T>: Makes all properties of T read-only.
//Record<K, T>: Constructs an object type with keys of type K and values of type T.
//Pick<T, K>: Constructs a type by picking a set of properties K from T.
//Omit<T, K>: Constructs a type by omitting a set of properties K from T.
//11.Tyoe Inference with object Types
const studen = {
    name: "HongEngVathana",
    age: 19,
};
function getPetInfo(pet) {
    if (pet.type === "dog") {
        console.log(`Dog breed :${pet.breed}`);
    }
    else {
        console.log(`Cat color:${pet.color}`);
    }
}
//Discriminated unions, also known as tagged unions, are a powerful feature in TypeScript that allows for type-safe handling of different object shapes. This is often achieved using a common property (the "discriminant")
//=======================================================Enums=========================================================================
//5. Enums
//1. Basic Systax of Enums
//An Enum is defined using the enum keyword followed by the name of the enum and a set of named values:
var Driection;
(function (Driection) {
    Driection[Driection["Nort"] = 0] = "Nort";
    Driection[Driection["South"] = 1] = "South";
    Driection[Driection["East"] = 2] = "East";
    Driection[Driection["West"] = 3] = "West";
})(Driection || (Driection = {}));
//In the example above:
//Direction is an enum with four members: North, South, East, and West.
//Each member is assigned an incrementing numeric value starting from 0 by default (North is 0, South is 1, etc.).
//2. Numeric Enums
// Numeric enums are the most common form of enums in TypeScript. As shown in the example above, each member of the enum is automatically assigned a numeric value starting from 0.
// You can also manually assign values to some or all of the members:
var Direction;
(function (Direction) {
    Direction[Direction["Nort"] = 1] = "Nort";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["East"] = 3] = "East";
    Direction[Direction["Wast"] = 4] = "Wast";
})(Direction || (Direction = {}));
console.log(Direction);
// In this example:
// North is assigned 1, South automatically becomes 2, East becomes 3, and West becomes 4.
//3. String Enums
//String enums allow each member to have a string value. This can be useful when the enum values need to be more descriptive or when they should remain unchanged:
(function (Driection) {
    Driection["North"] = "North";
    Driection["South1"] = "South";
    Driection["East1"] = "East";
    Driection["West1"] = "West";
})(Driection || (Driection = {}));
//In this example:
//Each member of the enum is explicitly assigned a string value.
//4/ Heterogeneous Enums
//Enums can have a mix of string and numeric values, although this is generally discouraged as it can lead to confusion:
var BooleanLinkeHeterogeneousEnum;
(function (BooleanLinkeHeterogeneousEnum) {
    BooleanLinkeHeterogeneousEnum[BooleanLinkeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLinkeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLinkeHeterogeneousEnum || (BooleanLinkeHeterogeneousEnum = {}));
let value1;
value1 = "Vatana";
value1 = 123;
const student = {
    name: "Vathana",
    age: 30,
    greet() {
        console.log("Hi Vathana");
    },
};
console.log(studen);
const person2 = {
    name: "John",
    age: 30,
};
// In this example, the Person interface has two separate declarations that TypeScript merges into one interface.
// Key Differences
// Declaration Merging: Interfaces support merging, while type aliases do not.
// Extending Types: Both can extend other types or interfaces, but interfaces are often preferred for object shapes and contracts.
// Complex Types: Type aliases can represent complex types, such as union or intersection types, which interfaces cannot.
//================================================Scrip Umion Type==========================
//7.Type Scrip Umion Types
//What are Union Types?
//A union is created using the | (pipe) symbol to combine munltiple Type into one .for Exanmple
let Value;
Value = "Vathana";
Value = 19;
// In this case, value can either be a string or a number. The ariable value can be assigned either of these types, and TypeScript will enforce the constraints of each type accordingly.
//Key  Features
//1. Type Safety
// TypeScript ensures that you can only use methods or properties that are common to all types in the union. If you need to use a method specific to one type, you must first check the type using type guards.
function Hello(Value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
//2. Type Guards
// Type guards are conditions that allow TypeScript to narrow down the possible type within a specific block of code. Common type guards include typeof, instanceof, and custom type predicates
function getLegth(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value.length;
    }
}
console.log(getLegth);
function getArea(shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    else {
        return shape.width * shape.height;
    }
}
function handleResponse(status1) {
    switch (status1) {
        case "success":
            console.log("Operation was successful!");
            break;
        case "error":
            console.log("There was an error.");
            break;
        case "loading":
            console.log("Loading...");
            break;
    }
}
//=====================================================================================Function=========================================================
//A simple function with no parameters and no return type.
function greet() {
    console.log("Hello Vahana");
}
greet();
// Explanation:
// function greet(): Declares a function named greet.
// void: Indicates that the function does not return any value.
// console.log("Hello, world!"): Prints a message to the console.
//2. Function with parameters
//A function that takes parameters.
function add(a, b) {
    return a + b;
}
let result10 = add(4, 5);
console.log(result10);
// Explanation:
// function add(a: number, b: number): number: A function named add that takes two parameters a and b of type number and returns a number.
// return a + b: Returns the sum of a and b.
//3Optional Parameters
//A function where some parameters are optional.
function multiply(a, b) {
    return b ? a * b : a;
}
let result1 = multiply(5);
let result2 = multiply(4, 5);
console.log(result1);
// Explanation:
// b?: number: The ? makes b an optional parameter. If b is not provided, it defaults to undefined.
// return b ? a * b : a: If b is provided, return the product; otherwise, return a.
//4. Defaul Parameters
//A function with default parameter avlues
function subtract(a, b = 2) {
    return a - b;
}
let result3 = subtract(5);
let result4 = subtract(5, 4);
// Explanation:
// b: number = 2: The b parameter has a default value of 2.
// If b is not provided, the function uses the default value.
//5.Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
// Explanation:
// ...numbers: number[]: The ... syntax allows the function to take any number of arguments as an array.
// numbers.reduce(...): Adds up all the numbers in the array.
//6 .Arrow Function
const multiply1 = (a, b) => {
    return a * b;
};
let result = multiply(5, 3);
// Explanation:
// (a: number, b: number) => number: Declares an arrow function that takes two parameters a and b and returns a number.
// Arrow functions provide a more concise syntax for writing functions.
//7. Function with a Return Type
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
let result6 = divide(10, 2);
function greetPerson(person) {
    return `Hello ,${person.fistName} ${person.lastName}!`;
}
let user1 = { firstName: "Vathana", lastName: "Hong" };
// Key Changes:
// The interface now uses firstName instead of fistName.
// The greetPerson function now correctly accesses person.firstName.
// Output:
// The console will display: "Hello, Vathana Hong!"
// This should work as expected!
