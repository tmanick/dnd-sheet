const races = {
	dragonborn: {
		name: 'Dragonborn',
		details: 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
		stats: {
			str: 2,
			cha: 1
		},
		speed: 30,
	},
	dwarf: {
		name: 'Dwarf',
		details: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
		stats: {
			con: 2
		},
		speed: 25,
	},
	elf: {
		name: 'Elf',
		details: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
		stats: {
			dex: 2
		},
		speed: 30
	},
	gnome: {
		name: 'Gnome',
		details: 'A gnome/’s energy and enthusiasm for living shines through every inch of his or her tiny body.',
		stats: {
			int: 2
		},
		speed: 25
	},
	halfelf: {
		name: 'Half-Elf',
		details: 'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents.',
		stats: {
			cha: 2
		},
		speed: 30
	},
	halfling: {
		name: 'Halfling',
		details: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.',
		stats: {
			dex: 2
		},
		speed: 25
	},
	halforc: {
		name: 'Half-Orc',
		details: 'Half-orcs/’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.',
		stats: {
			str: 2,
			con: 1
		},
		speed: 30
	},
	human: {
		name: 'Human',
		details: 'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
		stats: {
			str: 1,
			dex: 1,
			con: 1,
			int: 1,
			wis: 1,
			cha: 1
		},
		speed: 30
	},
	tiefling: {
		name: 'Tiefling',
		details: 'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.',
		stats: {
			int: 1,
			cha: 2
		},
		speed: 30
	},
}

export default races;