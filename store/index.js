export const state = () => ({
	navName: " ",
	locales: ['zh', 'en'],
  locale: 'zh'
})

export const getters = {
  navName: state => state.navName,
  locales: state => state.locales,
  locale: state => state.locale
};

export const mutations = {
	setNavName (state, val) {
		state.navName = val;
	},
	SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
			state.locale = locale
    }
  }
}

export const actions = {
	setNavName ({commit}, navName) {
		commit('setNavName', navName)
	}
}