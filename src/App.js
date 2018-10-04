import React, { Component } from 'react';
import './App.css';
import SubmitForm from './SubmitForm';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {},
      forecastData: {},
      zipcode: '',
      searched: false,
      errors: false
    }
  }
  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&units=imperial&APPID=47dfbef7216b91a633cfe1ff3d218a5f`)
    .then((response) => {
      console.log(response);
      if(!response.ok){
        throw response;
      }
      return response.json();
    }).then((res) => {
      console.log(res);
      this.setState({errors: false});
      this.setState({currentData: res});
    }).catch(err => {
      console.error(err);
      this.setState({errors: true});
      this.setState({searched: false});
    })
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode},us&units=imperial&APPID=47dfbef7216b91a633cfe1ff3d218a5f`)
    .then((response) => {
      console.log(response);
      if(!response.ok){
        throw response;
      }
      return response.json();
    }).then((res) => {
      console.log(res);
      this.setState({errors: false});
      this.setState({forecastData: res});
    }).then(() => {
      this.setState({searched: true})
    }).catch(err => {
      console.error(err);
      this.setState({errors: true});
      this.setState({searched: false});
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SubmitForm zipcode={this.state.zipcode} handleChangeText={this.onChangeText} submitZip={this.onSubmit}/>
        </header>
        {this.state.errors && <div>There was an error finding that zipcode. Try again with a valid zipcode.</div>}
        {this.state.searched && 
          <Grid centered columns={3}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <CurrentWeather current={this.state.currentData}/>
          </Grid.Column>
          <Grid.Row centered>
            <Grid.Column mobile={16} tablet={5} computer={3} className="forecast-card-wrapper">
              <ForecastWeather forecast={this.state.forecastData} afternoonIndex={3}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={5} computer={3} className="forecast-card-wrapper">
              <ForecastWeather forecast={this.state.forecastData} afternoonIndex={11}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={5} computer={3} className="forecast-card-wrapper">
              <ForecastWeather forecast={this.state.forecastData} afternoonIndex={19}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={5} computer={3} className="forecast-card-wrapper">
              <ForecastWeather forecast={this.state.forecastData} afternoonIndex={27}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={5} computer={3} className="forecast-card-wrapper">
              <ForecastWeather forecast={this.state.forecastData} afternoonIndex={35}/>
            </Grid.Column>
          </Grid.Row> 
        </Grid>
        }
        
      </div>
    );
  }
}

export default App;
