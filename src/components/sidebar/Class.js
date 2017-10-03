import React from 'react';

class Class extends React.Component {
	render() {
		const classes = this.props.classes;
		
		return (
			<div className="class-container">
				<h3>Select a class:</h3>
				<select name="class" onChange={(e) => (this.props.classChange(e))}>
					<option value="">-- Select --</option>
					{
						Object
							.keys(classes)
							.map(key => <option key={key} value={key}>{classes[key].name}</option>)
					}
				</select>
				<button className="class-update">Update Class</button>
				<div className="class-details">{this.props.classDetails}</div>
			</div>
		);
	}
}

export default Class;