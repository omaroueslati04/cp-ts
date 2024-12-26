interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  npm 
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  const myCar = new Car("mercedes", "s", 2023);
  console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
  myCar.start();