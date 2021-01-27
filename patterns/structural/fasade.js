//для созданий простого итерфейса для работы с классами (jquery)
/*
*  используется для создания некоторой абстракции, скрывающей за собой
* совершенно иную реальность. Паттерн «фасад» обеспечивает удобный высокоуровневый
* интерфейс для больших блоков кода, скрывая за собой их истинную сложность.
* */

class Complains {
    constructor() {
        this.complains = []
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complains.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complains {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complains {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if (type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add({id, customer, details});
    }
}

const registry = new ComplaintRegistry();

console.log(registry.register('Roman', 'service', 'no available'));
console.log(registry.register('Elena', 'product', 'see error'));
