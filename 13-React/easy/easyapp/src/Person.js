import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons:{

      }
    }
  }


render() {
  return(
    <div className="person">
    <h3>Nathan Cha</h3>
    <h4>704-150-0177</h4>
    <h4>12/25/1990</h4>
  </div>
    )
  }
}

export default App;