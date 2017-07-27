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

	render() {
		return (
			<div className="home">
				<div className="col-xs-9">
					<CharacterSheet />
				</div>
				<div className="col-xs-3">
					<Race races={RaceData} />
					<Class classes={ClassData} />
					<Background backgrounds={BackgroundData} />
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