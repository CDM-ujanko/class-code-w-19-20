var myVariable;

console.log(myVariable);

myVariable = 5;

console.log(myVariable);

var two = 2;

console.log(myVariable + 2);

console.log('I want 15', myVariable + 5 * two);
console.log('I want 20', (myVariable + 5) * two);

var stringOne = 'Hello World',
    stringTwo = "Hello World",
    fromBob = 'From Bob';

console.log(stringOne, stringTwo);

let longString = stringOne + ' - ' + stringTwo + ' ' + fromBob;
document.write(longString);
document.write('<br>');

document.write('This string is ' + fromBob.length + ' chars long!');

document.write('<p>' + stringOne.toLocaleUpperCase() + '</p>');

console.log(stringOne.split(' '));

var t = true,
    f = false;
    
console.log('t:', t, 'f:', f);

// let userName = prompt('What is your name?');

// userName = userName.toLowerCase();
// BAAAAD
// userName = userName[0].toLocaleUpperCase() + userName.slice(1);
// GOOOOD
// userName = userName.charAt() + userName.slice(1);

// document.write('Well hello ' + userName +', it is very nice to meet you!');

let arr = ['Item 1'];

arr.push('Item 2');

arr.push(5);

console.log('myArr', arr, 'item ar index 1', arr[1]);

let itemFromArr = arr.pop();

console.log('itemFromArr', itemFromArr, 'arr', arr);

arr.push('another', 42);

let partsOfText = ['Bob', 'likes', 'to', 'make', 'burgers'];

document.write('<p>' + partsOfText.join(' ') + '</p>');


var obj = {
    myKey: 'my value',
    one: 1,
    two: 'two'
};

console.log('obj', obj);

// getting things out of objects
console.log(obj.myKey, obj['myKey']);

// BAD!
// console.log(obj[myKey]);

// Fix
var myKey = 'one';
console.log(obj[myKey]);

var nestedObj = {
    childObj: {
        keyOne: 'val 1',
        keyTwo: 'val 2',
    },
    childArray: ['seven', 9, 'five', 'cow'],
    numberKey: 75324848552,
    stringKey: 'My very long string',
    boolKey: false
}

console.log(nestedObj);

var student = {
    name: 'Bob',
    bDay: '01/01/1973',
    classes: [
        {
            classCode: 'IT238',
            meetingTime: 'Tue 5 45'
        }, {
            classCode: 'IT231',
            meetingTime: 'Wen 5 45'
        }
    ]
}
console.log('Student Bob', student);

let students = [];

students.push(student);

console.log(students);