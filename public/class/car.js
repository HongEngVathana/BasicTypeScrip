"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// car.ts
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    drive() {
        return `Driving a ${this.year} ${this.model}`;
    }
}
exports.Car = Car;
exports.default = Car;
