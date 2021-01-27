/*
* используется для расширения функционала объектов без модификации существующих
* классов или функций-конструкторов. Этот паттерн можно использовать для добавления к
* объектам неких возможностей без модификации кода, который ответственен за их создание.
* */

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

//decorator
function abc(server) {
    server.isABC = true;
    server.abcInfo = function() {
        return server.url;
    }

    return server;
}

//decorator
function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}

const s1 = abc(new Server('12.34.56.78', 8000));

const s2 = azure(new Server('33.44.55', 6000));


