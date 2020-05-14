import React from 'react';
import './App.css';
import BasicInfo from './BasicInfo';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons:{
            name: 'Nathan Cha',
            number: '704-150-0177',
            birth: '12/25/1990'
        }
      }
    }
  
  
  render() {
    return(
      <div className="person">
      <BasicInfo name={this.state.persons.name} number={this.state.persons.number} birth={this.state.persons.birth}></BasicInfo>
    </div>
      )
    }
  }

export default App;
