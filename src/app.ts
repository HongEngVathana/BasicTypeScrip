//1 about DataType
//2 about Array
//3.Tuple
//4.Object Type
//5.Enums
//6.Type Aliases
//1=======================================Data Type==========================================
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

//Unknown

let unknownType: unknown = 4;
console.log("Unknown (number):", unknownType);
unioneType = "Could be anything";
console.log("Unknown (string):", unioneType);

//2.=======================================================Array=============================================

//1 . Basic Array
//array number
let number1: number[] = [1, 2, 3, 4, 5, 6];
//array string
let username: string[] = ["A", "B", "C"];

//2. Array Using the`Array`Generic

let number2: Array<number> = [1, 2, 3, 4, 5, 5, 6, 7];
let username2: Array<string> = ["A", "B", "C"];
//This is equivalent to the basic array syntax but uses Array<type> instead of type[].

//3. Multidmensional Arrays

let matrix: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
//Here, matrix is a 2D array (an array of arrays) where each sub-array represents a row.

//4. Array of objects

type Person3 = { name: string; age: number };

let people: Person3[] = [
  { name: "Vathana", age: 19 },
  { name: "Makara", age: 18 },
];

//In this example, people is an array of Person objects, where Person is a custom type with properties name and age.

//5.Readonly Arrays

let reaonlyNumbers: readonly number[] = [1, 2, 3, 4, 5];

//Attempting to change the contents of readonlyNumbers (e.g., readonlyNumbers.push(6)) will result in a compile-time error.

//6. Tuple Arrays
let Employee1: [number, string] = [1, "makara"];
//Here, employee is a tuple that must have a number as the first element and a string as the second element.

//7. Union Type Arrays

let mixeArray: (number | string)[] = [1, "one", 3, "three"];
//In this example, mixedArray can contain both numbers and strings.

//8/Array of Any Type

let randomValue1: any[] = [1, "Hello", true, { name: "Makara" }, [2, 3, 4]];
//The randomValues array contains a number, a string, a boolean, an object, and another array.

//9. Array Using `Array Constructor`
let fruits = new Array<string>("Vathana", "Makara", "Hong");
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
let tuple1: [string, number];

tuple = ["Hello", 42];
//A basic tuple has a fixed length and defined types for each element.

//2.Optional Elements in Tuples

let optionalTuple: [string, number?];

optionalTuple = ["Vathana"];
optionalTuple = ["Vathana", 19];
//Tuples can have optional elements using the ? syntax.

//3. Rest Elements in Tuples

let restTuple: [string, ...number[]];
restTuple = ["Vathana"];
restTuple = ["Hello", 42, 34, 56];
//TypeScript 4.0 and later supports rest elements in tuples, allowing the definition of tuples with a variable number of elements of a specific type.

//4. Readonly Tuples

let readonlyTuple: readonly [string, number] = ["HongEngVathana", 19];
//Tuples can be marked as readonly to prevent modification after creation.

//5. Labeled Tuples

let LabeledTuple: [name: string, abg: number];
LabeledTuple = ["Vathana", 19];

//TypeScript allows labeling tuple elements for better readability.

//6. Nested Tuples

let nestedTuple: [string, [number, number]];
nestedTuple = ["Point", [20, 20]];
console.log(nestedTuple);
//Tuples can be nested, meaning a tuple can contain other tuples as elements.

//7. Tuple with Union Types

let unionTuple: [string, number | boolean];

unionTuple = ["Vathana", 10];
console.log(unionTuple);
// unionTuple = ["Vathana", true];

//8 Tuple with Heterogenneous Types

let heterogeuusTuple: [number, string, boolean];

heterogeuusTuple = [1, "Vathana", true];

console.log(heterogeuusTuple);
//A tuple can hold elements of different types, making it a heterogeneous tuple

//9. Tuple with Dyn=namic Length using rest Elements

let dynamicLengTuple: [string, ...number[]];

dynamicLengTuple = ["Number", 1, 2, 3, 4];
dynamicLengTuple = ["Only string"];

console.log(dynamicLengTuple);
//Using a rest element at the end of a tuple allows for dynamic length with a specific type.

//===========================================Objrct Types====================================

//1 .Basic Object Types

type person = {
  name: string;
  age: number;
};
//In this example, the Person type describes an object that has two properties: name (a string) and age (a number).

//2. Optinal Properties

type Car = {
  brand: string;
  model?: string;
  year: number;
};

//Here, model is an optional property, so a Car object may or may not have a model property.

//4. index Signatures

type Dictionary = {
  [key: string]: string;
};
//This Dictionary type represents an object where all keys are strings and all values are string

//5. Nested Object Types
type Address = {
  street: string;
  city: string;
  zipCode: number;
};
type USer = {
  name: string;
  address: Address;
};
//Here, User has an address property that itself is an object of type Address.

//6 . Intersection Types

//Intersection types (&) allow you to combine multiple types into one. An object of an intersection type must satisfy all the combined types:

type Employee1 = {
  id: number;
  departemt: string;
};
type Manager = Employee & {
  teamSIze: number;
};

//7.Union Types

//Union types (|) let you define a type that could be one of several types:
type Status = "Hong" | "Eng" | "Vathana";

type UserStatus = {
  userId: number;
  status: Status;
};
//UserStatus type has a status property that can be one of three string literals: "active", "inactive", or "suspended".

//8.Mapped Types

//Mapped types allow you to create a new type by transforming properties of an existing type. This is useful for creating utility types like Partial, Readonly, and Required:
type Partia1l<T> = {
  [p in keyof T]?: T[p];
};
type PartialPerson = Partial<Person>;
//Partial<Person> makes all properties of the Person type optional.

//9. Type Aliases for Objects

//Type aliases provide a way to name a complex type for reuse. They are particularly useful when working with objects:

type Point = {
  x: number;
  y: number;
};
type Line = {
  start: Point;
  end: Point;
};
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
//TypeScript can automatically infer the types of properties in objects if you initialize them immediately:

//12.Extending and Merging Object Types
type Person1 = {
  name: string;
  age: number;
};
type Employee3 = Person1 & {
  jobTitle: string;
};
//Object types can be extended or merged using the & (intersection) operator, which is useful when you want to create new types based on existing ones:

//13 .Discriminated Unions
type Dog = {
  type: "dog";
  breed: string;
};
type Cat = {
  type: "Cat";
  color: string;
};

type Pet = Dog | Cat;
function getPetInfo(pet: Pet) {
  if (pet.type === "dog") {
    console.log(`Dog breed :${pet.breed}`);
  } else {
    console.log(`Cat color:${pet.color}`);
  }
}
//Discriminated unions, also known as tagged unions, are a powerful feature in TypeScript that allows for type-safe handling of different object shapes. This is often achieved using a common property (the "discriminant")
//=======================================================Enums=========================================================================
//5. Enums

//1. Basic Systax of Enums
//An Enum is defined using the enum keyword followed by the name of the enum and a set of named values:
enum Driection {
  Nort,
  South,
  East,
  West,
}
//In the example above:
//Direction is an enum with four members: North, South, East, and West.
//Each member is assigned an incrementing numeric value starting from 0 by default (North is 0, South is 1, etc.).

//2. Numeric Enums

// Numeric enums are the most common form of enums in TypeScript. As shown in the example above, each member of the enum is automatically assigned a numeric value starting from 0.

// You can also manually assign values to some or all of the members:

enum Direction {
  Nort = 1,
  South,
  East,
  Wast,
}
console.log(Direction);
// In this example:
// North is assigned 1, South automatically becomes 2, East becomes 3, and West becomes 4.

//3. String Enums

//String enums allow each member to have a string value. This can be useful when the enum values need to be more descriptive or when they should remain unchanged:
enum Driection {
  North = "North",
  South1 = "South",
  East1 = "East",
  West1 = "West",
}
//In this example:

//Each member of the enum is explicitly assigned a string value.

//4/ Heterogeneous Enums
//Enums can have a mix of string and numeric values, although this is generally discouraged as it can lead to confusion:
enum BooleanLinkeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
//In this example:

//No is assigned the numeric value 0, and Yes is assigned the string "YES".
//================================================================Type Ailases===================================================
//6.Type Ailases

//stntax:
//type AliasName=Type

type StringOrNuber = string | number;
let value1: StringOrNuber;
value1 = "Vatana";
value1 = 123;
// value1=true ;//Error: boolean is not assignable to StringOrNumber

//2.Interfaces
//what is Inerfaces

// An interface in TypeScript is a way to define the shape of an object. It can be used to describe objects, classes, and functions. Interfaces are a powerful tool for creating contracts within your code.
//Syntax:
// interface interfaceName{
//   property:typeof;
//   method():ReturnType;
// }

interface Person5 {
  name: string;
  age: number;
  greet(): void;
}
const student: Person5 = {
  name: "Vathana",
  age: 30,
  greet() {
    console.log("Hi Vathana");
  },
};

console.log(studen);
// Use Cases:
// Object Shapes: Define the structure of objects with properties and methods.
// Class Contracts: Classes can implement interfaces, ensuring they adhere to a particular structure.
// Function Signatures: Describe the shape of functions, including parameters and return types.
// Features:
// Declaration Merging: Interfaces can be declared multiple times with the same name. TypeScript merges these declarations into a single interface.
// Extending Interfaces: Interfaces can extend other interfaces, allowing for flexible and reusable type definitions.

// Features:
// Declaration Merging: Interfaces can be declared multiple times with the same name. TypeScript merges these declarations into a single interface.
// Extending Interfaces: Interfaces can extend other interfaces, allowing for flexible and reusable type definitions.

interface Person2 {
  name: string;
}

interface Person2 {
  age: number;
}

const person2: Person = {
  name: "John",
  age: 30,
};

// In this example, the Person interface has two separate declarations that TypeScript merges into one interface.

// Key Differences
// Declaration Merging: Interfaces support merging, while type aliases do not.
// Extending Types: Both can extend other types or interfaces, but interfaces are often preferred for object shapes and contracts.
// Complex Types: Type aliases can represent complex types, such as union or intersection types, which interfaces cannot.

//7.Type Scrip Umion Types

//What are Union Types?

//A union is created using the | (pipe) symbol to combine munltiple Type into one .for Exanmple

let Value: string | number;
Value = "Vathana";
Value = 19;

// In this case, value can either be a string or a number. The ariable value can be assigned either of these types, and TypeScript will enforce the constraints of each type accordingly.

//Key  Features
//1. Type Safety

// TypeScript ensures that you can only use methods or properties that are common to all types in the union. If you need to use a method specific to one type, you must first check the type using type guards.
function Hello(Value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

//2. Type Guards

// Type guards are conditions that allow TypeScript to narrow down the possible type within a specific block of code. Common type guards include typeof, instanceof, and custom type predicates

function getLegth(value: string | string[]): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
}
console.log(getLegth);

//3. Complex  unions

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function getArea(shape: Shape): number {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  } else {
    return shape.width * shape.height;
  }
}

//4. Example

type Status = "success" | "error" | "loading";

function handleResponse(status: Status) {
  switch (status) {
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
