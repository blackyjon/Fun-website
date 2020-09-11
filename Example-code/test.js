'use strict';

function title(value) {
    document.getElementById('title').textContent = value
}

title('Jonny did it!! Wooo');

function Extra(star, test) {
    document.getElementById('resume').textContent = (star + test);
}

Extra('Dooo ittt!!', 'yeah dood')

let test = function testFunction (test) {
    document.getElementById('test').textContent = test;
}

test('sup');

let key = 3;

function code(number) {

    let kode = number * key;
    return kode;
}

let secretCode = code(4);
console.log( secretCode )

let mySymbol = Symbol();

let dood = {
    name: "jonny",
    age: "25",
    partTime: false,
    [mySymbol]: 'secretInformation',
    Dun: function() {
        console.log();
    }
}

dood.Dun('Dun');

const header = document.getElementById('title');

header.style.color = 'blue';

test(dood.partTime);

const check = ['a','b','c','d','eeee'];

check.splice(3, 1, 'hello');

const newCheck = check.slice('1','4');

console.log(newCheck);

console.log(check[3]);

const check2 = ['a','b','c','d','e','g'];

check2.shift(check2);

check2.unshift(check2);

console.log(check2);



/* let truename = 'Jonny';
let name = `hello ${truename}`;
alert(name);

name = name */