var personInfo = (function (personalData) {
    var pii = {
        name: 'InuKaito',
        ssn: '098-76-7890'
    }
    return public = {
        getName: function getName() {
            return pii.name;
        }
    };
})();
console.log(personInfo.getName());

