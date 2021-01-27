class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {

    }

    work() {
        return `${this.name} is working ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has salary: ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'creates soft';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'executes testing';
    }
}

const dev = new Developer('Roman', 50000);
console.log(dev.getPaid());
console.log(dev.work());

const qa = new Tester('Lena', 40000);
console.log(qa.getPaid());
console.log(qa.work());