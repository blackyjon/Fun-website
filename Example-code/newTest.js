'use strict';

let headers = {
    name: "Now doing javascript!",
    age: "25",
    Awesome: false,
    head: function () {
        if (headers.age > 20){
            document.getElementById('title').style.color = 'green';
            document.getElementById('resume').textContent = 'Just did javascript from scratch almosty';
            document.getElementById('test').textContent = 'Hello';
        } else {
            document.getElementById('title').style.color = 'purple';
            document.getElementById('resume').textContent = 'Yes!! The other one worked!';
            document.getElementById('test').textContent = 'Yee';
        }
        console.log(headers);
    } 
}

headers.head();

let condition = ('4' >= '3') ? "true":"false"; // Change the 4 to log true or false

console.log(condition);

