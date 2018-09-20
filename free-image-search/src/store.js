import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        images: [],
        image: null,
        searched: false,
        error: null,
        loadingImage: false,
        loadingImages: false,

    },
    mutations: {
        setLoading(state) {
            state.loadingImages = !this.state.loadingImages
        },
        setImages(state, payload) {
            state.loadingImages = state.loadingImages = !this.state.loadingImages;
            state.images = payload.hits;
        },
        setError(state, payload) {
            state.loadingImages = state.loadingImages = !this.state.loadingImages;
            state.error = payload;
        },
        setImage(state, payload) {
            state.image = payload;
        },
        setSearched(state) {
            state.searched = true;
        }
    },
    actions: {
        fetchData({ dispatch, commit }, query) {
            commit("setLoading");
            commit("setSearched");
            axios
                .get(`https://pixabay.com/api/?key=10165331-82da6047d606e6bbe100888f3&q=${query}&image_type=photo`)
                .then(res => {
                    dispatch("fetchDataSuccess", res.data)

                })
                .catch(err => {
                    console.log(err)
                    dispatch("fetchDataFailure", err)
                });
        },
        fetchDataSuccess({ commit }, data) {
            console.log(data)
            commit("setImages", data)

        },
        fetchDataFailure({ commit }, err) {
            console.log(err)
            commit("setError", err)
        }
    },
    getters: {
        images(state) {
            return state.images
        },
        loading(state) {
            return state.loadingImages
        },
        image(state) {
            return state.image
        },
        loadingImage(state) {
            return state.loadingImage
        },
        searched(state) {
            return state.searched;
        }

    }
})