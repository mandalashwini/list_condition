import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation_component from './ValidationComponent/ValidationComponent'
import Char_component from './CharComponent/CharComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  textLengthHandler = (event) => {
    this.setState({
     input_text : event.target.value
    }
    )
  }

  state = {
    input_text: ""
  }

  delete_component = (index) => {
    const arr2 = (this.state.input_text).split("")
    arr2.splice(index,1)
    const new_text = arr2.join("")
    this.setState({input_text:new_text})
    console.log("new_text:---"+new_text)

  }

  render() {
    let char_component = null 
    const arr = this.state.input_text.split("")
    console.log(arr)
    char_component = (
      <div>{
        arr.map ( (x,index) => {

          return <Char_component ch = {x}  click={this.delete_component.bind(index)} />
        })
    
    }</div>
      
    )
    
    return (
      <div className="App">
        <h3 >List and Components </h3>
        <input type="text" onChange={this.textLengthHandler} value={this.state.input_text}/>
        <p>{this.state.input_text.length}</p>
        <Validation_component len={this.state.input_text.length}/>
            
        {char_component}
      </div>
    );
  }
}

export default App;
