import axios from "axios";

export default {
	actions: {
		async API_PLACES(ctx) {
			try {
				ctx.commit('SET_LOAD', true);
				const places = await axios('https://bandaumnikov.ru/api/test/site/get-index').then(res => res.data.data);
				ctx.commit('UPDATE_PLACES', places)
			} catch (error) {
				ctx.commit('SET_ERROR', error)
			} finally {
				ctx.commit('SET_LOAD', false)
			}
		}
	},
	mutations: {
		UPDATE_PLACES(state, places) {
			state.places = places
		},
		SET_LOAD(state, value) {
			state.placesLoad = value
		},
		SET_ERROR(state, value) {
			state.placesError = value
		}
	},
	state: {
		places: [],
		placesLoad: false,
		placesError: null
	},
	getters: {
		ALL_PLACES(state) {
			return state.places
		}
	}
};