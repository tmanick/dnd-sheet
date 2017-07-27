import React from 'react';

class Class extends React.Component {
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
		const classes = this.props.classes;
		return (
			<div className="class-container">
				<h3>Select a class:</h3>
				<select name="class">
					<option value="">-- Select --</option>
					{
						Object
							.keys(classes)
							.map(key => <option key={key}>{classes[key].name}</option>)
					}
				</select>
				<button className="class-update">Update Class</button>
			</div>
		);
	}
}

export default Class;