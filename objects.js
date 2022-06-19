//objects
const person = {
    name: 'Mahad',
    age: 21,
    greet() {
        console.log('My Name is: ' + this.name + ' and my age is: ' + this.age)
    }
};
person.greet();