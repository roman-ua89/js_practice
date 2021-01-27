/*
* Прототип - паттерн который позволяет копировать объекты и не вдаваться в
* подробности их реализации. Это вся его задача! 
* */

const car = {
    wheels: 4,

    init() {
        console.log(`Car has ${this.wheels} and owner ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Roman'
    }
});

console.log(carWithOwner.__proto__ === car); //true

carWithOwner.init();

///
class Tesla {
    constructor(model, price, interior) {
        this.model = model;
        this.price = price;
        this.interior = interior;
    }

    produce() {
        return new Tesla(this.model, this.price, this.interior);
    }
}

const def = new Tesla('S', '46', 'white');
const car1 = def.produce();
const car2 = def.produce();


