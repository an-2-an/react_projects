import React, { Component } from 'react';

class Day extends Component {
  render() {
  	return (
  		<div className={this.props.className}>
  			{this.props.value}
  		</div>
  	)
  }
}

  export default Day;