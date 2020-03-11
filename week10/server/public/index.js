const form = document.querySelector('form');
const msg = document.querySelector('.message');

console.log(form);

form.addEventListener('submit', function(e) {
    console.log(e);
    e.preventDefault();
    msg.innerHTML = '';
    // if (form.lastName.value.length < 2) {
    //     msg.innerHTML = 'Last name must be 2 Characters.';
    //     return;
    // }

    $.ajax({
            url: '/submit-ajax',
            method: 'POST',
            data: {}
        })
        .done(function(res) {
            msg.innerHTML = 'Ooooo happy day! We have your data now ' + form.firstName.value;
            $(form).hide();
            console.log(res);
        }).fail(function(error) {
            msg.innerHTML = 'Boooo you are trying to hack me ' + form.firstName.value;
            console.error('Something went wrong', error);
        });
});

$('input[data-required=\'len2\']').on('blur', function(e) {
    console.log(e, e.target.value);
    if (e.target.value.length < 2) {
        e.target.classList.add('error');
    } else {
        e.target.classList.remove('error');
    }
})