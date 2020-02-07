import React, { Component } from 'react';
import Day from './Day'

class Container extends Component {
  
	state = {
		value: 1,
		date: new Date(),
	};

	next_value = function() {
			let y = this.state.date.getFullYear();
			let m = this.state.date.getMonth();
			if (m == 11) {
				m = 0;
				y++;
			} else {
				m++;
			}
			let d = 1;
			let new_date = new Date(y, m, d);
			this.setState({
				value : this.state.value + 1,
				date: new_date,
			});
			console.log('click');
	}


  render() {
	


  	Date.prototype.daysInMonth = function() {
		return new Date(this.getFullYear(), this.getMonth()+1, 0).getDate();
	};

	Date.prototype.firstDayWeekDay = function () {
		var temp = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
		return (temp == 0) ? 7 : temp;
	}

	Date.prototype.getNameOfMonth = function () {
		var months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
		return months[this.getMonth()];
	}

	let n = this.state.date.daysInMonth();

	let d = this.state.date.firstDayWeekDay();
	let month = this.state.date.getNameOfMonth();
	let year = this.state.date.getFullYear();

	let items = []

	for (let i=0; i<(n+d-1); i++) {
		if (i % 7 == 0 && i > 0) {
	    	items.push(<br />)
	    }
	    if (i < d - 1) {
			items.push(<Day className="day day-empty" value=" "/>)
	    } else if ( i % 7 == 5 || i % 7 == 6 ) {
	    	items.push(<Day className="day weekend" value={i+2-d}/>)
	    } else {
	    	items.push(<Day className="day" value={i+2-d}/>)
	    }
	    
	    
	  }

    return (
    	<div>
    		<h2>{month} {year}</h2>
    		<button className="btn" onClick={this.next_value.bind(this)}>Next</button>
      		<div className="Container">
        
           	{items} 
                
      	</div>
      	<p>{}</p>
      	
      </div>
    );
  }
}

export default Container;