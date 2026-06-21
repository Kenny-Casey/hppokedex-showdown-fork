export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
    aggronite: {
        inherit: true,
        isNonstandard: null,
    },
    baasphyxite: {
        inherit: true,
        isNonstandard: null,
    },
    eviolite: {
		inherit: true,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.nfe || pokemon.baseSpecies.id === 'grapploct' || pokemon.baseSpecies.id === 'beartic' ) {
				return this.chainModify(1.5);
			}
		},
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.nfe || pokemon.baseSpecies.id === 'grapploct' || pokemon.baseSpecies.id === 'beartic') {
				return this.chainModify(1.5);
			}
		},
	},
    reelingerite: {
        inherit: true,
        isNonstandard: null,
    },
    sablenite: {
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