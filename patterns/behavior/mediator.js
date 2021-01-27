/*
* представьте себе контроль трафика в аэропорту: все решения о том,
* какие самолеты могут взлетать или садиться, принимает диспетчер.
* Для этого, все сообщения, исходящие от самолетов, поступают в башню
* управления, вместо того, чтобы пересылаться между самолетами напрямую.
* Такой централизованный контроллер — это и есть ключ к успеху нашей системы.
* Это и есть «медиатор».
* */

class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

const roman = new User('Roman');
const lena = new User('Lena');
const igor = new User('igor');

const room = new ChatRoom();

room.register(roman);
room.register(lena);
room.register(igor);

roman.send('hello', lena);
lena.send('hello hello', roman);
igor.send('hello all');