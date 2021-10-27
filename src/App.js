import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      message: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      this.setState({
        message: data
      })
    }
    )
  }

  render(){
    const text = this.state.message.message
  return (
    <div className="App">
      <div>

      <h1> You want a Dog? </h1>
      <button onClick={this.handleChange} >Click here for one </button>
      </div>
      
      <img src={text} alt="" />
    </div>
  );
  }
}

export default App;
