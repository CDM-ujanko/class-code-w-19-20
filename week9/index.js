const cont = document.querySelector('.container');

let template = `
    {{regex}}
    {{text}}
    
`;

function render(context, template) {
    let compiled = Handlebars.compile(template);
    return compiled(context);
}

// $.ajax({
//     url: 'https://my-json-server.typicode.com/it238-sp-2019/db-test/students',
//     method: 'GET'
// }).done(function(data) {
//     console.log(data);
//     let emails = data.map(function(item) { return item.email });
//     console.log(emails);
//     let text = emails.join('\n');

//     console.log(text);

//     let reg = /^[a-zA-Z_.0-9]{2,}@[a-zA-Z_0-9]{2,}\.\w{2,3}(\.\w{2})?/gm
//     console.log(text.match(reg));
//     // the output will be an array

//     let templateData = {
//         regex: reg,
//         text: text
//     }
//     cont.innerHTML = render(templateData, template);
// });

// Storing data:
// let name = localStorage.getItem('name');

// alert('Hello ' + name);
// console.log(name);
// name = prompt('What is your name?');
// localStorage.setItem('name', name);

// Date:

let now = new Date();
console.log(now);
let date = new Date(1559573989);
let ericBDay = new Date('October 25, 1984 20:00:00 GMT-0600 (Central Standard Time)');
console.log(ericBDay.getTime() / 1000);

// now.setFullYear('2030');
now.setUTCDate(3);
console.log(now);

console.log(now);

let momentNow = moment();
console.log(momentNow.format('MMMM Do YYYY, h:mm:ss a'));

console.log(moment(ericBDay).add(130, 'years').format('dddd MMMM Do YYYY, h:mm:ss a'));