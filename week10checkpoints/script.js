// Objects are used to store key datas like personal informations or informations use to run a function.
// first Question
const me = (firstname, lastname) => {
    console.log(firstname, lastname);
}
me("Nathan", "Cha");

// Second Question
const sayHi = (name) => {
    console.log ("Hello my name is " + name);
}

const callHi = (callback) => {
    var name = "John Smith";
    callback(name);
}
callHi(sayHi);