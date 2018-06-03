import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			time: (new Date()).toLocaleString()
		}
		this.timeChanging()
	}
	timeChanging(){
		setInterval(()=>{
			this.setState({
			time: (new Date()).toLocaleString()
		})
		},1000)
	}

	render(){
		return <div>{this.state.time}</div>
		
	}

}

ReactDOM.render(<Clock />,
	document.getElementById('content')
	);
