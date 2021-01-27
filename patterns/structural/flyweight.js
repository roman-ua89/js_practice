// эффективно передавать и работать с данными через различные типы обектов
// браузер -Ю чтобы избежать повторной загрузки элементов (кэширование, сохр. памяти)
// https://gist.github.com/NazimovDmitrii/9d4fc7b465db403791e44aa9a506902f
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate;
        }

        const newCar = new Car(model, price);
        this.cars.push(newCar); // cash
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const bmw = factory.create('bmw', 10000);
const audi = factory.create('audi', 20000);
const bmwX3 = factory.create('bmw', 30000);

console.log(bmw);
console.log(audi);
console.log(bmwX3);

console.log(bmw === bmwX3);
