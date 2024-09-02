// Number
let integer: number = 42;
let float: number = 3.14;
let hex: number = 0x2a;
let binary: number = 0b1010101;
let octal: number = 0o52;

console.log("Integer:", integer);
console.log("Float:", float);
console.log("Hexadecimal:", binary);
console.log("Octal:", octal);

//string

let singleQuote: string = "Hello"; // i use command +s ''=>""
let doubleQuote: string = "World";
let templateLiteral: string = `Hello ,${doubleQuote!}`;
console.log("Single Quote:", singleQuote);
console.log("Double Quote:", doubleQuote);
console.log("Teplate Literal:", templateLiteral);

//boolean

let isActive: boolean = true;
let isCompleted: boolean = false;

console.log("isActive:", isActive);
console.log("isCompleted:", isCompleted);

//Array

let numberArray: number[] = [1, 2, 3, 4, 5, 6];
let stringArray: Array<string> = ["one ", "two", "three"];
console.log("Number Array:", numberArray);
console.log("String Array:", stringArray);

//Tuple

let tuple: [string, number] = ["Vathana", 19];
console.log("Tuple", tuple);
console.log("Name:", tuple[0]);
console.log("Age:", tuple[1]);

//Enum

enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Green;
console.log("Enum Color:", color);

//Any

let randomValue: any = 10;
console.log("Any (umber):", randomValue);

randomValue = "Hello";
console.log("Any(strig):", randomValue);
randomValue = true;
console.log("Any()boolean:", randomValue);

function logMessage(): void {
  console.log("This function returns no value");
}
logMessage();

//Null and Undefined

let undefinedValue: undefined = undefined;
let nullValue: null = null;

console.log("Undefined:", undefinedValue);
console.log("Null", nullValue);

//object

let person: { name: string; age: number } = {
  name: "Vathana",
  age: 19,
};
console.log("Object", person);
console.log("Name:", person.name);
console.log("Age:", person.age);

//Never

function throwError(message: string): never {
  throw new Error(message);
}

//Union Types

let unioneType: number | string;
unioneType = 20;
console.log("Union Type (Number):", unioneType);

unioneType = "Hello";
console.log("Union Type (String)", unioneType);

//Intersection Types

type Person = { name: string; age: number };
type Employee = { employeeID: number; department: string };

let Employee: Person & Employee = {
  name: "Makara",
  age: 18,
  employeeID: 101,
  department: "CS",
};

console.log("Intersection Type:", Employee);

//Type Aliases

type StringOrNumber = string | number;
let value: StringOrNumber;

value = "Hello";
console.log("Type Alias (string:", value);

value = 123;
console.log("Type Alias (number):", value);

//Literal Types

let literlTyope: "start" | "stop";
literlTyope = "start";
console.log("Liter Type:", literlTyope);
