// car.ts
export class Car {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  drive(): string {
    return `Driving a ${this.year} ${this.model}`;
  }
}

export default Car;
