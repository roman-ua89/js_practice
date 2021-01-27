/*
* Этот паттерн используется для создания объектов в случаях,
* когда не нужно делать общедоступной логику их создания.
* Паттерн «Фабрика» может быть использован в том случае,
* если нужно создавать различные объекты в зависимости от
* специфических условий.
* */

class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function() {
            console.log(`${this.name} ${this.type} ${this.cost}`);
        }
        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Roman', 'simple'),
    factory.create('Vadim', 'premium'),
    factory.create('olga', 'standard')
];

// members.forEach(m => {
//     console.log(m.define());
// })


