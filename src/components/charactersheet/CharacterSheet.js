import React from 'react';

class CharacterSheet extends React.Component {
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
		return (
			<div className="character-sheet">
				<h3>Info</h3>
				Character Name:<br/>
				Class & Level:<br/>
				Background:<br/>
				Player Name:<br/>
				Race:<br/>
				Alignment:<br/>
				Experience Points:<br/>
				<h3>Stats</h3>
				Strength Stat:<br/>
				Strength Modifier:<br/>
				Dexterity Stat:<br/>
				Dexterity Modifier:<br/>
				Constitution Stat:<br/>
				Constitution Modifier:<br/>
				Intelligence Stat:<br/>
				Intelligence Modifier:<br/>
				Wisdom Stat:<br/>
				Wisdom Modifier:<br/>
				Charisma Stat:<br/>
				Charisma Modifier:<br/>
				<h3>Inspiration</h3>
				Inspiration:<br/>
				<h3>Proficiency</h3>
				Proficiency Bonus:<br/>
				<h3>Savings Throws</h3>
				Strength:<br/>
				Dexterity:<br/>
				Constitution:<br/>
				Intelligence:<br/>
				Wisdom:<br/>
				Charisma:<br/>
				<h3>Skills</h3>
				Acrobatics (Dex):<br/>
				Animal Handling (Wis):<br/>
				Arcana (Int):<br/>
				Athletics (Str):<br/>
				Deception (Cha):<br/>
				History (Int):<br/>
				Insight (Wis):<br/>
				Intimidation (Cha):<br/>
				Investigation (Int):<br/>
				Medicine (Wis):<br/>
				Nature (Int):<br/>
				Perception (Wis):<br/>
				Performance (Cha):<br/>
				Persuasion (Cha):<br/>
				Religion (Int):<br/>
				Sleight of Hand (Dex):<br/>
				Stealth (Dex):<br/>
				Survival (Wis):<br/>
				<h3>Character</h3>
				Armor Class:<br/>
				Initiative:<br/>
				Speed:<br/>
				Hit Point Maximum:<br/>
				Current Hit Points:<br/>
				Temporary Hit Points:<br/>
				Hit Dice:<br/>
				Death Save Successes:<br/>
				Death Save Failures:<br/>
				<h3>Attacks & Spellcasting</h3>
				Weapon:<br/>
				Spell:<br/>
				<h3>Equipment</h3>
				Copper:<br/>
				Silver:<br/>
				Electrum:<br/>
				Gold:<br/>
				Platinum:<br/>
				<h3>Languages</h3>
				Language:<br/>
				<h3>Proficiencies</h3>
				Proficiency:<br/>
				<h3>Traits</h3>
				Trait:<br/>
				<h3>Features</h3>
				Feature:<br/>
				<h3>Feats</h3>
				Feat:<br/>
				<h3>Personality</h3>
				Personality Traits:<br/>
				Ideals:<br/>
				Bonds:<br/>
				Flaws:<br/>

			</div>
		);
	}
}

export default CharacterSheet;