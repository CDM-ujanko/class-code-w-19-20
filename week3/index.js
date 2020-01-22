if (!true) {
    console.log('Hello world!');
}

if (false) {
    console.log('I will never execute!');
}

// var userInput = prompt('What is your email?');

var userInput = 0;

if (userInput.length > 7) {
    console.log('We got a valid email!');
} else {
    console.log('Not a valid email!');
}

// var num = prompt('Give me a number!');
var num = 7;

console.log(typeof(num));

if (parseInt(num) === 6) {
    console.log('We got 6');
} else if (num > 100) {
    console.log('That is a huge number!')
} else if (num >= 40) {
    console.log('The number is bigger than or equal to 40');
} else {
    console.log('I don\'t know what that is');
}

console.log(num);


// js type conversion:
// BAD!
console.log("'6' == 6", '6' == 6);
// GOOD!
console.log("'6' === 6", '6' === 6);

// For loop:
var myNumbers = [0, 1, 2, 77, 88, 100, 12038, 384, 44];

var large = [];
var small = [];

// for (var i = 0; i < myNumbers.length; i++) {
//     console.log(i, myNumbers[i] + 1);
//     if (myNumbers[i] > 100) {
//         large.push(myNumbers[i]);
//         document.write(`<p>The large number at index ${i} is: ${myNumbers[i]}</p>`);
//     } else {
//         small.push(myNumbers[i]);
//     }
// }

// var i = 0;
// while (i < myNumbers.length) {
//     if (myNumbers[i] > 100) {
//         large.push(myNumbers[i]);
//         document.write(`<p>The large number at index ${i} is: ${myNumbers[i]}</p>`);
//     } else {
//         small.push(myNumbers[i]);
//     }

//     i = i+1;
// }

function greeter(name) {
    // alert('My function got called!');
    return 'Hello ' + name;
}

console.log(greeter('Bob'));

function square (a, b) {
    return a ** b;
}

var twoSquare = square(2, 2);
console.log(twoSquare);

function filterEven(limit) {
    var even = [];

    for (var bob = 0; bob <= limit; bob++) {
        if (bob % 2 === 0) {
            even.push(bob);
            // document.write(`<p>The number ${bob} is even</p>`);
        }
    }

    return even;
}

// function loopFunction (item, i) {
//     if (item > 100) {
//         large.push(item);
//         document.write(`<p>The large number at index ${i} is: ${item}</p>`);
//     } else {
//         small.push(item);
//     }
// }

myNumbers.forEach(function (item, i) {
    if (item > 100) {
        large.push(item);
        document.write(`<p>The large number at index ${i} is: ${item}</p>`);
    } else {
        small.push(item);
    }
});