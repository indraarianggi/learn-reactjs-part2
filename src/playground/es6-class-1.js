
// Super Class
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${ this.name }.`;
    }

    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

// Child Class 1
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // refer to super class (Person)
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription(); // call function in super class
        
        if(this.major) {
            description += ` His/Her major is ${ this.major }.`;
        }

        return description;
    }
}

// Child Class 2
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age); // refer to super class (Person)
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting(); // call function in super class

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${ this.homeLocation }.`;
        }

        return greeting;
    }
}


const me = new Person('Indra Arianggi', 22);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

const student1 = new Student('Indra Arianggi', 22, 'Informatic Engineering');
console.log(student1.getDescription());

const student2 = new Student();
console.log(student2.getDescription());

const traveler1 = new Traveler('Indra Arianggi', 22, 'Depok, Indonesia');
console.log(traveler1.getGreeting());

const traveler2 = new Traveler(undefined, undefined, 'Nowhere');
console.log(traveler2.getGreeting());
