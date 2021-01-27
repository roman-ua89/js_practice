/*
* Это паттерн проектирования, предназначенный для создания объекта.
* Конструктором называется функция, которая создает новые объекты.
* Однако в JavaScript объекты могут быть созданы «на лету», даже без
* функции-конструктора или определения класса.
Конструктор один из наиболее часто используемых паттернов проектирования.
* Он применяется для создания объектов определенного типа.
* */

// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip;
// }
//
// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:80`
// }
//
// const inst = new Server('inst Germany', '11.44.5.6');
// console.log(inst);

class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const inst = new Server('inst Germany', '11.44.5.6');


/*
const person = Object.create(Object.prototype);
Object.defineProperty(person, 'name', {
    value: 'Roman'
})
console.log(person);
*/




//es15 constructor + add method
//es16 class
//Object.create
//define property
