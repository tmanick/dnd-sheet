import React from 'react';

class Race extends React.Component {
	/*
	constructor() {
		super();
		
		// Bind this to custom methods
		this.methodName = this.methodName.bind(this);
	}
	*/
	/*
	methodName() {
		
	}
	*/
	
	render() {
		const races = this.props.races;
		return (
			<div className="race-container">
				<h3>Select a race:</h3>
				<select name="race">
					<option value="">-- Select --</option>
					{
						Object
							.keys(races)
							.map(key => <option key={key}>{races[key].name}</option>)
					}
				</select>
				<button className="race-update">Update Race</button>
			</div>
		);
	}
}

export default Race;