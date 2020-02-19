// console.log(Handlebars);

function render(t, d) {
    var templateFunction = Handlebars.compile(t);
    return templateFunction(d);
}

console.log(data);

let container = document.querySelector('.container');

// let string = '';

// data.forEach(function(item) {
//     string += `<p>${item.name.first} ${item.name.last}</p>`;
// });

// console.log(string);

// container.innerHTML = string;

// let dataSimple = {
//     firstName: 'Bob',
//     lastName: 'Ross'
// }

// let template = `
// <div class="person">
//   {{firstName}} {{lastName}}
// </div>
// `
// console.log(render(template, dataSimple))
// container.innerHTML = render(template, dataSimple);

let template = `
{{#each people}}
  <div class="person">
    {{log this}}
    <img src="{{this.picture}}" />
    <p>{{@index}}: {{name.first}} {{name.last}}</p>
    <p>Age: {{age}}</p>
    <p><a href="mailto:{{email}}">{{email}}</a></p>
    <p><a href="tel:{{phone}}">{{phone}}</a></p>
    <br>
  </div>
{{/each}}
`;

container.innerHTML = render(template, { people: data });