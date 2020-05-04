let express = require('express');

let app = express();

let data = require('./public/employees.json');

app.get('/employees', (req, res) =>{

    if(!data) {
        res.status(404).send(`Couldnt find the employees`);
    };

    res.send(data);

});



app.get('/employees/:id', (req, res) => {

    const eData = data.employees.find((employee) => {
        console.log(employee.id);

        return parseInt(req.params.id) === employee.id;
    });

    if(!eData) {
        res.status(404).send(`Couldnt find the employee's id please try again`);
    };

    res.send(eData);


});

app.post("/employees", (req,res) => {
    const { error } = validEmployee(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const employee = {
        id: data.employees.length + 1,
        name: req.body.name,
        salary: req.body.salary,
        deparment: req.body.deparment
    };
 
    employees.push(employee);
    res.status(200).send(employees);    
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});