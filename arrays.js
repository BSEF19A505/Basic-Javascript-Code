//Arrays
const persons = [
    'Mahad',
    'Zain',
    'Ans'
]

//object
const person = {
    name: 'Mahad',
    age: 21,
    greet() {
        console.log('My Name is: ' + this.name + ' and my age is: ' + this.age)
    }
}

// Destructuring
const printName = ({ name }) => {
    console.log(name);

}
printName(person)
const { name, age } = person;
console.log(name, age)

const [persona, personb, personc] = persons;
console.log(persona, personb, personc)


for (let person of persons) {
    console.log(person);
}

//pushing values in array
persons.push('Hassan', 'Jawad')
console.log(persons.map(person =>
    'Person: ' + person
))

//spread operator
const newpersons = [...persons, 'Faizan']
console.log(newpersons)

//rest operator
const array = (...args) => {
    return args
}
console.log(array(1, 2, 3, 34, 34, 342, 545, 62, 34))


const person2 = {...person }
console.log(person2)