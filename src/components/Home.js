import React from 'react';
import CharacterSheet from './charactersheet/CharacterSheet'

import Flavor from './sidebar/Flavor'

import Race from './sidebar/Race'
import RaceData from './data/races'

import Class from './sidebar/Class'
import ClassData from './data/classes'

import Background from './sidebar/Background'
import BackgroundData from './data/backgrounds'

import Stats from './sidebar/Stats'
import Inventory from './sidebar/Inventory'
import Spells from './sidebar/Spells'

class Home extends React.Component {
	constructor() {
		super();
		
		// Bind this to custom methods
		this.raceChange = this.raceChange.bind(this);
		this.classChange = this.classChange.bind(this);
		this.backgroundChange = this.backgroundChange.bind(this);
	}

	state = {
		raceDetails: '',
		classDetails: '',
		backgroundDetails: '',
	}

	raceChange(event) {
		let selectedValue = event.target.value;
		let raceDetails = RaceData[selectedValue].details;
		this.setState({ raceDetails });
	}
	classChange(event) {
		let selectedValue = event.target.value;
		let classDetails = ClassData[selectedValue].details;
		this.setState({ classDetails });
	}
	backgroundChange(event) {
		let selectedValue = event.target.value;
		let backgroundDetails = BackgroundData[selectedValue].details;
		this.setState({ backgroundDetails });
	}

	render() {
		return (
			<div className="home">
				<div className="col-xs-9">
					<CharacterSheet />
				</div>
				<div className="col-xs-3">
					<Race
						races={RaceData}
						raceChange={this.raceChange}
						raceDetails={this.state.raceDetails}
					/>
					<Class
						classes={ClassData}
						classChange={this.classChange}
						classDetails={this.state.classDetails}
					/>
					<Background
						backgrounds={BackgroundData}
						backgroundChange={this.backgroundChange}
						backgroundDetails={this.state.backgroundDetails}
					/>
					<Flavor />
					<Stats />
					<Inventory />
					<Spells />
				</div>
			</div>
		);
	}
}

export default Home;