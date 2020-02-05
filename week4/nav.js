let modal = document.querySelector('.modal'),
    isOpen = false;

console.log(modal);

function toggleNav() {
    // if (isOpen) {
    //     modal.classList.remove('active'); 
    // } else {
    //     modal.classList.add('active');
    // }
    isOpen = !isOpen;
    modal.classList.toggle('active', isOpen);
}