function personInfo() {
    var pii = {
        name: 'Inukaito',
        ssn: '098-76-7890'
    }
    function displayName() {
      console.log(pii.name);
    }
    return displayName;
  }
  
  var personData = personInfo();
  personData();