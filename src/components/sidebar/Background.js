import React from 'react';

class Background extends React.Component {
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
		const backgrounds = this.props.backgrounds;
		return (
			<div className="background-container">
				<h3>Select a background:</h3>
				<select name="background">
					<option value="">-- Select --</option>
					{
						Object
							.keys(backgrounds)
							.map(key => <option key={key}>{backgrounds[key].name}</option>)
					}
				</select>
				<button className="background-update">Update Background</button>
			</div>
		);
	}
}

export default Background;