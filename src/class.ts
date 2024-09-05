//1 Basic Class Definition
//In TypeScript, you define a class using the class keyword. Here's a simple example:

class Person4 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet1() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const persons = new Person4("Vathana", 30);
persons.greet1();
console.log(persons);

//2.Constructors

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const hello = new Animal("Lake");
console.log(hello.name);

//3 parameter
class Car1 {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
const car = new Car1("Toyota", "Corolla", 2024);
console.log(car.make, car.model, car.year);

//4 Methods

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
const calc = new Calculator();
console.log(calc.add(4, 5));

//5. Access Modifiers

class Person10 {
  ssn: string;
  constructor(ssn: string) {
    this.ssn = ssn;
  }
  getSSN1(): string {
    return this.ssn;
  }
}
const personss = new Person10("+855 168-168-168");
//6. Inherritance

class Animal2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} barks`);
  }
}
class Dog4 extends Animal2 {
  bark(): void {
    console.log(`${this.name}barks`);
  }
}
const dogs = new Dog4("Rex");
dogs.bark();
dogs.speak();

//7. Abstact Classes

abstract class Shape1 {
  abstract area(): number;
}
class Rctangle extends Shape1 {
  constructor(private width: number, private heigth: number) {
    super();
  }
  area(): number {
    return this.width * this.heigth;
  }
}
const rectagngle = new Rctangle(5, 10);
console.log(rectagngle.area());

//8. interfaces with Classes

interface Shape5 {
  area(): number;
}
class Circle implements Shape5 {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(9);
console.log(circle.area());

//9.Static Methodrs

class MathUtil {
  static pi: number = 3.14;
  static circleArea(radius: number): number {
    return MathUtil.pi * radius * radius;
  }
}
console.log(MathUtil.pi);
console.log(MathUtil.circleArea(5));

//10. Getter and Setter

class Rectagle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    if (value > 0) {
      this._width = value;
    }
  }
  get height(): number {
    return this._height;
  }
  set height(value: number) {
    if (value > 0) {
      this._height = value;
    }
  }
}
const rect = new Rectagle(10, 20);
console.log(rect.width);
rect.width = 30;
console.log(rect.width);
