console.log($);

let modal = $('.modal');
let isOpen = false;

console.log(modal);

function toggleNav() {
    console.log(modal);
    if (isOpen) {
        modal.addClass('active');
    } else {
        modal.removeClass('active');
    }
    isOpen = !isOpen;
    // modal.toggleClass('active', isOpen);
}

// let htmlModal = document.querySelector('.modal');

// console.log(modal.attr('class'));
// console.log(htmlModal);