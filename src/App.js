import React, { Component } from 'react';
import './App.css';
import SubmitForm from './SubmitForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      zipcode: ''
    }
  }
  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode},us&APPID=47dfbef7216b91a633cfe1ff3d218a5f`)
    .then((response) => {
      console.log(response);
      return response.json();
    }).then((res) => {
      console.log(res);
      
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SubmitForm zipcode={this.state.zipcode} handleChangeText={this.onChangeText} submitZip={this.onSubmit}/>
        </header>
        <div className="ui grid container">
          <div className="four wide column">a</div>
          <div className="four wide column">b</div>
          <div className="four wide column">c</div>
          <div className="four wide column">d</div>
        </div>
      </div>
    );
  }
}

export default App;
