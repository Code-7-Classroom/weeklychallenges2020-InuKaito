
var Person = function (name, job, age) {
    Programmer.call(this, name, job, age);
    this.name = name;
    this.job = job;
    this.age = age;
    this.profession = function() {
        console.log(this.name +' is a ' + this.job);
    }
    this.exercise = function() {
         console.log(this.name + "Running is fun! - said no one ever");
    }
}

var Programmer = function(language, busy) {
    this.language = language;
    this.busy = busy;   
    this.completeTask = function() {
        this.busy = false;
        if(this.busy == false){
        console.log(this.name + 'is not busy');
        }
        else{
            return this.name + 'is busy';
        }
    }
    this.acceptNewTask = function() {
        this.busy = true;
        console.log(this.name + 'is busy');
    }
    this.offerNewTask = function() {
        if (this.busy == true) {
            console.log(this.name + "can't accept any new tasks right now.");
        } else {
            return this.name + "would love to take on a new responsibility."
        }
    }
    this.learnLanguage = function() {
        this.language = ['javascript', 'java', 'node'];
        console.log(this.name + 'is learning these lanuages ' + this.language);
    }
    this.listLanguage = function() {
        this.language = ['HTML', 'CSS', 'React', 'Python'];
        console.log(this.name + 'knows these coding languages ' + this.language);
    }
}
Person.prototype = Object.create(Programmer.prototype);
Person.prototype.constructor === Programmer;

var john = new Person('John ',' Front-end developer ', 24);
var mary = new Person('Mary ', ' Back-end developer ', 22);

john.exercise();
john.profession();
john.completeTask();
john.acceptNewTask();
john.offerNewTask();
john.learnLanguage() + john.listLanguage();


mary.exercise();
mary.profession();
mary.completeTask();
console.log(mary.offerNewTask());
mary.learnLanguage() + mary.listLanguage();
