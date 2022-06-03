/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import ModuleBase from './modules/module_base.js';

Vue.use(Vuex);

const getDefaultState = () => {
    return {};
};

export const store = new Vuex.Store({
    modules:{
        ModuleBase
    },
    state: getDefaultState(),
    plugins: [
        createPersistedState()
    ],
    mutations: {},
    actions: {
        resetVuex({ commit }){
            commit('resetState');
        },
    },
    getters: {},
});