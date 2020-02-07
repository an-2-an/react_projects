import React, { Component } from 'react';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "e87ad5b1194864fe0ef24c6ea5b29eb1"

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    error: undefined,

  }

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    if ( city ) {
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      // console.log(data);
      var date = new Date();
      date.setTime(data.sys.sunset * 1000);
      var sunset_date = date.getHours() + ":" + date.getMinutes();
      date = new Date();
      date.setTime(data.sys.sunrise * 1000);
      var sunrise_date = date.getHours() + ":" + date.getMinutes();
      // console.log(sunset_date);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        pressure: data.main.pressure,
        error: "",
      });
    }
    
  }

  render() {
    return (
      <div className="wrapper">
      <Info />
      <Form weatherMethod={this.getWeather} />
      <Weather 
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        pressure={this.state.pressure}
      />
      </div>
    )
  }
}

export default App;