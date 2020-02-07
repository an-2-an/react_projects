import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.weatherMethod}>
				<input type="text" name="city" placeholder="город" defaultValue="Kiev" />
				<button> Получить погоду</button>
			</form>
		)
	}
}

export default Form