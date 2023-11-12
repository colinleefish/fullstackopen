const arto = {
    name: "arto hellas",
    age: 35,
    education: "PhD",
    greet: function () {
        console.log('Hello, my name is ' + this.name)
    },
    doAddition: function (a, b) {
        console.log(this)
        console.log(a + b)
    }
}

arto.greet()
arto.growOlder = function () {
    this.age += 1
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

arto.doAddition(1, 4)

const referenceToAddition = arto.doAddition
referenceToAddition(2, 8)

const refToGreet = arto.greet
refToGreet.bind(arto)()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person("Adam Ondra", 29)
const janja = new Person("Janja Garnbret", 23)

adam.greeting()
janja.greeting()