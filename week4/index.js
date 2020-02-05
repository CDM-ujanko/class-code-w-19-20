// let mySpan = document.getElementById('mySpan');
// let mySpan = document.querySelector('.mySpan');
let mySpan = document.querySelectorAll('.mySpan');

console.log(mySpan, typeof(mySpan));

// setTimeout(function() {
//     mySpan.innerText = 'I changed this!';
//     console.log(mySpan.classList);
//     mySpan.classList.add('red');
//     mySpan.classList.add('left');
//     // mySpan.html = mySpan.html + 'What ever I want to add!';
// }, 3000);

// JQ

console.log($);
let myJqueryElement = $('.mySpan');

console.log(myJqueryElement, typeof(myJqueryElement));


setTimeout(function() {
    myJqueryElement.text('The text I added using JQ!');
    myJqueryElement.addClass('red');
    myJqueryElement.addClass('left');
    myJqueryElement.html('<span style="color: blue"> My html</span> that I added');
    myJqueryElement.append('<p>I got added later!</p>');
}, 3000);

setTimeout(function() {
    myJqueryElement.remove();
}, 6000);

console.log('Are they the same?', myJqueryElement.get(0) === mySpan);