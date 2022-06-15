// let name = 'Mahad';
// const age = 21;
// let rn = 505;


// const rec = (uname, uage, urn) => {
//     return ('Name is: ' + uname + ' age is: ' + uage + ' rollno is: ' + urn);

// }
// const add = (a, b) => a + b;
// console.log(add(2, 3));
// console.log(rec(name, age, rn));

// //objects
// const person = {
//     name: 'Mahad',
//     age: 21,
//     greet() {
//         console.log('My Name is: ' + this.name + ' and my age is: ' + this.age)
//     }
// };
// person.greet();

//Arrays
const persons = [
    'Mahad',
    'Zain',
    'Ans'
]
console.log(persons.map(person =>
    'Person: ' + person
))