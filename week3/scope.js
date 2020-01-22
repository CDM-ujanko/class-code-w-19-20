var myGlobalVar = 'Some stuff in global var';


function myFunction() {
    var myLocalVar = 'Some stuff in local var';

    console.log(myGlobalVar, myLocalVar);
}

myFunction();
// console.log(myGlobalVar, myLocalVar);


var myNumbers = [0, 1, 2, 77, 88, 100, 12038, 384, 44];

var large = [];
var small = [];

for (let i = 0; i < myNumbers.length; i++) {
    console.log(i, myNumbers[i]);
    if (myNumbers[i] > 100) {
        large.push(myNumbers[i]);
        document.write(`<p>The large number at index ${i} is: ${myNumbers[i]}</p>`);
    } else {
        small.push(myNumbers[i]);
    }
}