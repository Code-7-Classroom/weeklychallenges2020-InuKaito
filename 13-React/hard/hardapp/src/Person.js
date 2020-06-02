import React from 'react';
import './App.css';
import BasicInfo from './BasicInfo';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Nathan Cha',
                    number: '704-150-0177',
                    birth: '12/25/1990'
                },
                {
                    name: "Alan Vang",
                    number: "704-254-9078",
                    birth: "10/21/1994"
                },
                {
                    name: "Athey Xiong",
                    number: "704-984-1073",
                    birth: "06/15/1997"
                }
            ]
        }
    }


    render() {
        return (
            <div className="people">
                {this.state.persons.map(person => {
                    return (
                    <BasicInfo name={person.name} number={person.number} birth={person.birth}></BasicInfo>
                    )
                })}  
            </div>
        )
    }
}

export default App;
