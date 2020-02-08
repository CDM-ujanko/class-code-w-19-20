function myClickHandler(e) {

  if (!e) {
    document.body.style.background = '';
    return;
}

console.log('I got clicked!');
console.log(e.target.dataset.color);

document.body.style.background = e.target.dataset.color;
}

let myButton = document.querySelector('.myBtn'),
    myButton2 = document.querySelector('.myBtn2');

console.log(myButton);

// myButton.onclick = function (event) {
//   console.log(event);
//   console.log('This is a better way of doing things!');
// };

myButton.onclick = myClickHandler;
myButton2.onclick = myClickHandler;


window.onscroll = function (e) {
  console.log('scrolling', e);
};

window.onresize = function (e) {
  console.log('resize!', e);
};

window.onscroll = function (e) {
  console.log('my other function!', e);
};

myButton.addEventListener('click', function (e) {
  console.log('Hello I am a DOM Level 2 Event!');
});

myButton.addEventListener('click', function (e) {
  console.log('Hello the second DOM Level 2 Event!');
});

function myLevel2EventHandler(e) {
  console.log('myLevel2EventHandler');
}

myButton.addEventListener('click', myLevel2EventHandler);

setTimeout(function () {
  console.log('No more event!');
  myButton.removeEventListener('click', myLevel2EventHandler);
}, 5000);

// Select box:

let mySelect = document.querySelector('.mySelect');

mySelect.addEventListener('change', function (e) {
  console.log('The change event!', e);
  document.body.style.background = e.target.value;
});

let myInput = document.querySelector('.myInput');

myInput.addEventListener('keydown', function (e) {
  console.log('The keydown envent!', e);
  if (e.key === 'Enter') {
    document.body.style.background = e.target.value;
  }
});


// var vs let
//
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('The final value of i ', i);

var $myJqBtn = $('.jqBtn');

console.log($myJqBtn);

$myJqBtn.click(function (e) {
  console.log('The qjuery event', e);

  console.log(e.target.dataset.color);
  // document.body.style.background = e.target.dataset.color;
  document.body.style.background = $(e.target).data('color');
});


var $myJqBtn2 = $('.jqBtn2');

$myJqBtn2.on('click', function (e) {
  console.log('Using the on jq method', e);
  document.body.style.background = $(e.target).data('color');
});

























