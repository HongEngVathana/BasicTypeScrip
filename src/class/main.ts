import Car from "./car"; // Default import for Car
import { Person30 } from "./person"; // Named import for Person30

const myCar = new Car("Tesla", 2024);
console.log(myCar.drive()); // Output: Driving a 2024 Tesla

const person = new Person30("Alice", 30);
console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.
