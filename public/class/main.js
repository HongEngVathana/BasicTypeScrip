"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./car")); // Default import for Car
const person_1 = require("./person"); // Named import for Person30
const myCar = new car_1.default("Tesla", 2024);
console.log(myCar.drive()); // Output: Driving a 2024 Tesla
const person = new person_1.Person30("Alice", 30);
console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.
