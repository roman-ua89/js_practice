//внедрить новый функционал не ламая прошлый
// итегрировать старый итерфейс в новый
/*
* это структурный паттерн проектирования, который позволяет объектам с
* несовместимыми интерфейсами работать вместе.
* */
// https://web-artcraft.com/blog/dohodcivyj-primer-ispolzovania-patterna-adapter-na-javascript


class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2;
            case 'sub': return t1 - t2;
            default: return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }

    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2);
            case 'sub': return this.calc.sub(t1, t2);
            default: return NaN;
        }
    }
}

const adapter = new CalcAdapter();
console.log(adapter.operations(5,5, 'add'));

