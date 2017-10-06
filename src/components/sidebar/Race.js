import React from 'react';

class Race extends React.Component {
	render() {
		const races = this.props.races;

		return (
			<div className="race-container">
				<h3>Select a race:</h3>
				<select name="race" onChange={(e) => (this.props.raceChange(e))}>
					<option value="">-- Select --</option>
					{
						Object
							.keys(races)
							.map(key => <option key={key} value={key}>{races[key].name}</option>)
					}
				</select>
				<button className="race-update" onClick={() => {this.props.raceUpdate()}}>Update Race</button>
				<div className="race-details">{this.props.raceDetails}</div>
			</div>
		);
	}
}

export default Race;