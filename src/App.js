import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation_component from './ValidationComponent/ValidationComponent'
import Char_component from './CharComponent/CharComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  text_length = (event) => {
  const text_data = event.target.value
  this.setState(
    {
    len:text_data.length
    }, 
  )
  }
  state = {
    len: "",
    chars_compenents:[

    ]
  }

  render() {
    
     let chars = null
     const arr = this.text_data.split("")
     arr.map(x => {
      this.setState.chars_compenents[{ch: {x}}]
     })
     console.log("----------->"+this.setState.chars_compenents)
    
    return (
      <div className="App">
        <h3>List and Components </h3>
        <input type="text" onChange={this.text_length}/>
        <p>{this.state.len}</p>
        <Validation_component len={this.state.len}/>
        <Char_component  />
      </div>
    );
  }
}

export default App;
