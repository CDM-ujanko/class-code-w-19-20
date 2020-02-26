let xhr = new XMLHttpRequest();
// DO NOT USE MY KEY, GET YOURS
let key = 'fV8yJbvECedPXlgFyo4d7hVGf3SwtC2umWFTrdKA';
let apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + key;
console.log(xhr.readyState);

const template = document.getElementById('template').innerHTML;
const content = document.getElementById('content');
const input = document.querySelector('#date-lookup');

Handlebars.registerHelper('eq', function(a, b) {
    return a == b;
})

function render(template, data) {
    var templateFunction = Handlebars.compile(template);
    return templateFunction(data);
}

input.addEventListener('input', function(e) {
    if (e.target.value.length < 10) {
        return;
    }

    // PURE JS WAY OF DOING THINGS
    // xhr.onreadystatechange = function() {
    //     console.log(xhr.readyState);

    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         let data = JSON.parse(xhr.responseText);
    //         console.log(data);
    //         content.innerHTML = render(template, { APOD: data });
    //     }
    // };

    // xhr.open('GET', apiUrl + '&date=' + e.target.value, true);
    // xhr.send();

    // console.log(xhr);

    $.ajax({
        method: 'GET',
        url: apiUrl + '&date=' + e.target.value,
    }).done(function(data) {
        console.log(data);
        content.innerHTML = render(template, { APOD: data });
    }).fail(function(error) {
        console.error('Something went wrong', error);
    });
});