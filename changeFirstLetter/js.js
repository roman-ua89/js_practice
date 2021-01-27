const str = 'roman';

//------------------------------------------------------



const upperFirstLetter = str => {
    return Array.from(str).map( (letter, i) => {
        return (i === 0) ? letter.toUpperCase() : letter
    }).join('')
}

console.log(upperFirstLetter(str));

//------------------------------------------------------



String.prototype.upperFirstLetter = function(){
    return this[0].toUpperCase() + this.slice(1);
}

console.log(str.upperFirstLetter());

//------------------------------------------------------



const upperFletter = str => {
    const arr = str.split('');
    const first = arr.shift();
    return first.toUpperCase() + arr.join('');
}

console.log(upperFletter(str));

//------------------------------------------------------



for (var i = 0; i < 4; i++) {
    (function(enclosedVal){
        console.log(enclosedVal);
    })(i)

    // setTimeout( () => console.log(i),0)
}