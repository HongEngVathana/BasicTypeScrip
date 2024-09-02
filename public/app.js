"use strict";
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
