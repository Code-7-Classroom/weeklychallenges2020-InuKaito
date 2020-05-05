let express = require('express');

let app = express();

let data = require('./public/employees.json');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());

app.post('/employees', (req, res) => {
    const employee = {
        name: req.query.name,
        id: data.employees.length + 1

    };
    data.employees.push(employee);
    res.send(employee)
});

app.put('/employees/:id', (req, res) => {
    const upDate = data.employees.find(function (employees) {
        return parseInt(req.params.id) === employees.id;
    })
    if (!upDate) {
        res.status(404).send("Couldn't find the employee");
    } else 
        upDate.name = req.query.name,
        upDate.department = req.query.department;
        res.send("Change name and department only")
});

app.delete('/employees/:id', (req, res) => {
    const employeeDelete = data.employees.find((employees) => {
        return parseInt(req.params.id) === employees.id;
    })
    if (!employeeDelete) {
        res.status(404).send("Couldn't find the employees")
    }
    const index = data.employees.indexOf(e);
    data.employees.splice(index, 1);
    res.send('Deleted');
});

app.get('/employees', (req, res) => {

    if (!data) {
        res.status(404).send(`Couldnt find the employees`);
    };

    res.send(data);

});

app.get('/employees/:id', (req, res) => {

    const eData = data.employees.find((employee) => {
        console.log(employee.id);

        return parseInt(req.params.id) === employee.id;
    });

    if (!eData) {
        res.status(404).send(`Couldnt find the employee's id please try again`);
    };

    res.send(eData);


});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});