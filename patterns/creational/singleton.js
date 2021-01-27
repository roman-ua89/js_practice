/*
* Паттерн «Синглтон» или «Одиночка» (Singleton) представляет собой объект,
* который может существовать лишь в единственном экземпляре.
* В рамках применения этого паттерна новый экземпляр некоего
* класса создаётся в том случае, если он пока не создан.
* Если же экземпляр класса уже существует, то, при попытке обращения к конструктору,
* возвращается ссылка на соответствующий объект.
* Последующие вызовы конструктора всегда будут возвращать тот же самый объект.
* */

class DB {
    constructor(data) {
        if(DB.exists) {
            return DB.instance;
        }
        DB.instance = this;
        DB.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new DB('mongoDB');
console.log(mongo.getData());

const mysql = new DB('mySql');
console.log(mysql.getData());



