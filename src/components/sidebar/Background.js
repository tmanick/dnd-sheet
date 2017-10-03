import React from 'react';

class Background extends React.Component {
	render() {
		const backgrounds = this.props.backgrounds;

		return (
			<div className="background-container">
				<h3>Select a background:</h3>
				<select name="background" onChange={(e) => (this.props.backgroundChange(e))}>
					<option value="">-- Select --</option>
					{
						Object
							.keys(backgrounds)
							.map(key => <option key={key} value={key}>{backgrounds[key].name}</option>)
					}
				</select>
				<button className="background-update">Update Background</button>
				<div className="background-details">{this.props.backgroundDetails}</div>
			</div>
		);
	}
}

export default Background;