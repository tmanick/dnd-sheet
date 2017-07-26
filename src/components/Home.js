import React from 'react';
import CharacterSheet from './charactersheet/CharacterSheet.js'

import Flavor from './sidebar/Flavor.js'
import Race from './sidebar/Race.js'
import Class from './sidebar/Class.js'
import Background from './sidebar/Background.js'
import Stats from './sidebar/Stats.js'
import Inventory from './sidebar/Inventory.js'
import Spells from './sidebar/Spells.js'

class Home extends React.Component {

	render() {
		return (
			<div className="home">
				<div className="col-xs-9">
					<CharacterSheet />
				</div>
				<div className="col-xs-3">
					<Flavor />
					<Race />
					<Class />
					<Background />
					<Stats />
					<Inventory />
					<Spells />
				</div>
			</div>
		);
	}
}

export default Home;