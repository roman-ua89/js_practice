class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

//extra example
function * generator(collection) {
    let index = 0;

    while(index < collection.length) {
        yield collection[index++];
    }
}

const gen = generator(['this', 'is', 'str']);

for(const val2 of gen) {
    console.log('value2: ', val2);
}

const iterator = new MyIterator(['this', 'is', 'iterator']);

for(const val of iterator) {
    console.log('value: ', val);
}