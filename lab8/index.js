// Exercise 1
console.log('--- EXERCISE 1 ---')

String.prototype.filter = function (arr) {
    return this.split(' ').filter((word) => !arr.includes(word)).join(' ');
}

const text = "This house is not nice!".filter(['not']);
console.log(text);

////////////////////////////////////////////////

// Exercise 2
console.log('--- EXERCISE 2 ---')

Array.prototype.bubbleSort = function () {
    let isSorted = false;
    let lastUnsorted = this.length - 1;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lastUnsorted; i++) {
            if (this[i] > this[i + 1]) {
                swap(this, i, i + 1);
                isSorted = false;
            }
        }
        lastUnsorted--;
    }
    return this;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const sortedArray = [1, 3, 9, 5, 2, 10].bubbleSort();
console.log(sortedArray);

////////////////////////////////////////////////

// Exercise 3

// WITH FUNCTION CONSTRUCTOR 

console.log('--- EXERCISE 3 ---')
console.log('--- with OBJECT PROTOTYPE ---')

function Person(nameParam){
    this.name = nameParam;
}

class Teacher extends Person{

    teach(subject) {
        console.log(this.name + ' is now teaching ' + subject);    
    }
}

const teacher = new Teacher('Tina');
teacher.teach('WAP')


// WITH FACTORY
console.log('--- with FACTORY OBJECT ---')

const Teacherr = {
    name: 'Default',

    teach(subject) {
        console.log(this.name + ' is now teaching ' + subject);   
    }
};

const teacher2 = Object.create(Teacherr); 
teacher2.name = 'Tina';
teacher2.teach('WAP');

////////////////////////////////////////////////

// Exercise 4
// WITH FUNCTION CONSTRUCTOR

console.log('--- EXERCISE 4 ---')

const PersonFC = function (name, age){
    this.name = name;
    this.age = age;
}

PersonFC.prototype.greeting = function(){
    console.log('Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old')
}

PersonFC.prototype.salute = function(){
    console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
}

var StudentFC = function(name, age, major){
    this.major = major;
    PersonFC.call(this, name, age)
}
StudentFC.prototype = Object.create(PersonFC.prototype);

StudentFC.prototype.greeting = function(){
    console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
}

var ProfessorFC = function(name, age, department){
    this.department = department;
    PersonFC.call(this, name, age)
}
ProfessorFC.prototype = Object.create(PersonFC.prototype);

ProfessorFC.prototype.greeting = function(){
    console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department.');
}

const studentFC = new StudentFC('Ilkin', 27, 'Computer Science');

console.log('--- Student object with FUNCTION CONSTRUCTOR ---')
studentFC.greeting()
studentFC.salute();

const professorFC = new ProfessorFC('Tina', 32, 'Business Analysis');

console.log('--- Professor object with FUNCTION CONSTRUCTOR ---')
professorFC.greeting();
professorFC.salute();

// WITH OBJECT PROTOTYPE

const PersonPO = {
    name : undefined,
    age : undefined,

    greeting : function(){
        console.log('Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old')
    },
    salute : function(){
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
    }
}

const StudentPO = Object.create(PersonPO);
StudentPO.name = 'Ilkin'
StudentPO.age = 27
StudentPO.major = 'Computer Science'
StudentPO.greeting = function(){
    console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
}

console.log('--- Student object with OBJECT PROTOTYPE ---')
StudentPO.greeting();
StudentPO.salute();

const ProfessorPO = Object.create(PersonPO);
ProfessorPO.name = 'Tina'
ProfessorPO.age = 32
ProfessorPO.department = 'Business Analysis'
ProfessorPO.greeting = function(){
    console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department.');
}

console.log('--- Professor object with OBJECT PROTOTYPE ---')
ProfessorPO.greeting();
ProfessorPO.salute();
