import React, { Component } from 'react';

class Weather extends Component {
	render() {
		return (
			<div>
				{ this.props.city &&
					<div>
					<p>Город: {this.props.city}, {this.props.country}</p>
					<p>Температура: {this.props.temp}</p>
					<p>Давление: {this.props.pressure}</p>
					<p>Рассвет: {this.props.sunrise}</p>
					<p>Закат: {this.props.sunset}</p>
					</div>
				}
				
			</div>
		)
	}
}

export default Weather