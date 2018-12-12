import React from 'react';
import axios from 'axios';
import { WeatherDiv, WeatherSubDiv, WeatherFormDiv, City } from './css';

class Weather extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inputCity: '',
			country: '',
			weather: [],
			outputCity: '',
		};
	}

	weatherInputHandler = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	getWeather = (e) => {
		e.preventDefault();

		axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputCity},${this.state.country}&APPID=9e9486659b5c3ea40448e82fe4328966`)
      .then(response => {

      let city = response.data.city.name;
      let allStatus = response.data.list.map(status => (status.weather))
      let allDatesTimes = response.data.list.map(date => (date.dt_txt))

      let formatDays = [];
      for (let i = 0; i < allDatesTimes.length; i++){
        formatDays.push(allDatesTimes[i].split(''));
      }

      let days = [];
      let currentDay = '';
      for (let i = 0; i < formatDays.length; i++){
        for (let j = 0; j < formatDays.length; j++){
          if (formatDays[i][j] === ' '){
            break;
          }
          currentDay += formatDays[i][j]
        }
        days.push(currentDay);
        currentDay = '';
      }

      let times = [];
      let currentTime = '';
      for (let i = 0; i < formatDays.length; i++){
        for (let j = 11; j < 19; j++){
          currentTime += formatDays[i][j]
        }
        times.push(currentTime);
        currentTime = '';
      }

      let allWeather = [];
      for (let i = 0; i < allStatus.length; i++){
        allWeather.push(allStatus[i][0])
      }

      let temps = [];
      for (let i = 0; i < allWeather.length; i++ ) {
        temps.push(Math.round(response.data.list[i].main.temp * (9/5) - 459.67))
      }

      let obj = {}
      let builtWeather = []

      let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      var d = new Date();
      var n = d.getDay();

      for (let i = 0; i < allWeather.length; i++){
        obj.description = allWeather[i].description
        obj.date = days[i]
        obj.temp = temps[i]
        obj.time = times[i]
        obj.imgURL = `http://openweathermap.org/img/w/${response.data.list[i].weather[0].icon}.png`
        builtWeather.push(obj);
        obj = {};
      }
      const outputWeather = builtWeather.filter(w => w.time === "21:00:00")
      let num = 1;
      let counter = 0;

      for (let i = 0; i < outputWeather.length; i++){
        if (num + n > 6){
          outputWeather[i].day = weekDays[counter]
          counter++;
        } else {
          outputWeather[i].day = weekDays[n + num]
          num++;
        }
      }

      this.setState({weather: outputWeather, outputCity: city, inputCity: '', country: '',  })
      })
      .catch(err => {
        console.log(err)
      })
	}

	render(){
		return (
			<div>
				<City>
					{this.state.outputCity}
				</City>
				<WeatherDiv>
					{this.state.weather.map((w, i) => (
						<WeatherSubDiv key={i}>
							<img src={w.imgURL} alt='weather' />
							<p>{w.description}</p>
							<p>{w.temp} degrees</p>
							<p>{w.day}</p>
							<div>{w.date}</div>
						</WeatherSubDiv>
					))}
				</WeatherDiv>
				<WeatherFormDiv>
					<form>
						<input
							placeholder="City"
							onChange={this.weatherInputHandler}
							name="inputCity"
							value={this.state.city}
						/>
						<input
							placeholder="Country Code, us, uk ect"
							onChange={this.weatherInputHandler}
							name="country"
							value={this.state.country}
						/>
					</form>
					<button onClick={this.getWeather}>check your local weather</button>
				</WeatherFormDiv>
			</div>
		)
	}
}

export default Weather
