"use strict";
//1 Basic Class Definition
//In TypeScript, you define a class using the class keyword. Here's a simple example:
class Person4 {
    constructor(name, age) {
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
    constructor(name) {
        this.name = name;
    }
}
const hello = new Animal("Lake");
console.log(hello.name);
//3 parameter
class Car1 {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const car = new Car1("Toyota", "Corolla", 2024);
console.log(car.make, car.model, car.year);
//4 Methods
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calc = new Calculator();
console.log(calc.add(4, 5));
//5. Access Modifiers
class Person10 {
    constructor(ssn) {
        this.ssn = ssn;
    }
    getSSN1() {
        return this.ssn;
    }
}
const personss = new Person10("+855 168-168-168");
//6. Inherritance
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} barks`);
    }
}
class Dog4 extends Animal2 {
    bark() {
        console.log(`${this.name}barks`);
    }
}
const dogs = new Dog4("Rex");
dogs.bark();
dogs.speak();
//7. Abstact Classes
class Shape1 {
}
class Rctangle extends Shape1 {
    constructor(width, heigth) {
        super();
        this.width = width;
        this.heigth = heigth;
    }
    area() {
        return this.width * this.heigth;
    }
}
const rectagngle = new Rctangle(5, 10);
console.log(rectagngle.area());
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(9);
console.log(circle.area());
//9.Static Methodrs
class MathUtil {
    static circleArea(radius) {
        return MathUtil.pi * radius * radius;
    }
}
MathUtil.pi = 3.14;
console.log(MathUtil.pi);
console.log(MathUtil.circleArea(5));
//10. Getter and Setter
class Rectagle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        if (value > 0) {
            this._width = value;
        }
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (value > 0) {
            this._height = value;
        }
    }
}
const rect = new Rectagle(10, 20);
console.log(rect.width);
rect.width = 30;
console.log(rect.width);
