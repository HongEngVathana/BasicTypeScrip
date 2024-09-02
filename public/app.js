"use strict";
//1 about DataType
//2 about Array
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
