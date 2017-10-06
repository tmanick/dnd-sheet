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
		this.raceUpdate = this.raceUpdate.bind(this);
		this.classChange = this.classChange.bind(this);
		this.backgroundChange = this.backgroundChange.bind(this);

		this.state = {
			// race stuff
			raceDetails: '',
			currentRace: '',
			csRace: '',
			raceStr: 0,
			raceDex: 0,
			raceCon: 0,
			raceInt: 0,
			raceWis: 0,
			raceCha: 0,
			// class stuff
			classDetails: '',
			backgroundDetails: '',
			// character sheet stuff
			csStr: 0,
			csDex: 0,
			csCon: 0,
			csInt: 0,
			csWis: 0,
			csCha: 0,
		}
	}
	
	raceChange(event) {
		let selectedValue = event.target.value;
		let raceDetails = RaceData[selectedValue].details;
		let currentRace = selectedValue;
		this.setState({ raceDetails, currentRace });
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

	raceUpdate() {
		let currentRace = this.state.currentRace;
		
		this.setState({
			csRace : RaceData[currentRace].name,
			raceStr : (RaceData[currentRace].stats['str'] ? RaceData[currentRace].stats['str'] : 0),
			raceDex : (RaceData[currentRace].stats['dex'] ? RaceData[currentRace].stats['dex'] : 0),
			raceCon : (RaceData[currentRace].stats['con'] ? RaceData[currentRace].stats['con'] : 0),
			raceInt : (RaceData[currentRace].stats['int'] ? RaceData[currentRace].stats['int'] : 0),
			raceWis : (RaceData[currentRace].stats['wis'] ? RaceData[currentRace].stats['wis'] : 0),
			raceCha : (RaceData[currentRace].stats['cha'] ? RaceData[currentRace].stats['cha'] : 0),
		});

		this.updateStats();
	}

	updateStats() {
		this.setState({
			csStr : this.state.raceStr + 1,
			csDex : this.state.raceDex + 1,
			csCon : this.state.raceCon + 1,
			csInt : this.state.raceInt + 1,
			csWis : this.state.raceWis + 1,
			csCha : this.state.raceCha + 1
		});
	}

	render() {
		return (
			<div className="home">
				<div className="col-xs-9">
					<CharacterSheet
						csRace={this.state.csRace}
						csStr={this.state.csStr}
						csDex={this.state.csDex}
						csCon={this.state.csCon}
						csInt={this.state.csInt}
						csWis={this.state.csWis}
						csCha={this.state.csCha}
					/>
				</div>
				<div className="col-xs-3">
					<Race
						races={RaceData}
						raceChange={this.raceChange}
						raceDetails={this.state.raceDetails}
						raceUpdate={this.raceUpdate}
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