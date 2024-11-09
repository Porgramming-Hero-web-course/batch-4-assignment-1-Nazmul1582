class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge(): number {
      const currentYear: number = new Date().getFullYear();
      return currentYear - this.year;
  }
}

const newCar = new Car("Honda", "Civic", 2018);
console.log(`${newCar.getCarAge()} (assuming current year is ${new Date().getFullYear()})`);