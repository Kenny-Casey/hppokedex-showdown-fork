export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
    baasphyxite: {
        inherit: true,
        isNonstandard: null,
    },
    clodsite: {
        inherit: true,
        isNonstandard: null,
    },
    eviolite: {
		inherit: true,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.nfe || pokemon.baseSpecies.id === 'grapploct' || pokemon.baseSpecies.id === 'cinccino') {
				return this.chainModify(1.5);
			}
		},
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.nfe || pokemon.baseSpecies.id === 'grapploct' || pokemon.baseSpecies.id === 'cinccino') {
				return this.chainModify(1.5);
			}
		},
	},
    reelingerite: {
        inherit: true,
        isNonstandard: null,
    },
    wavlenite: {
        inherit: true,
        isNonstandard: null,
    },
    styrafimite: {
        inherit: true,
        isNonstandard: null,
    },

};