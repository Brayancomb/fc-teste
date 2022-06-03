const axios = require('axios');
import api from '../../services/api';
const getDefaultState = () => {
    return {
        ROOT_API: 'localhost',
        information_profissional: {
            nome: '',
            cpf: '',
            phone:'',
            estadoSelected:{
                cidades: [],
              },
            especialidadeSelected:'',
            valor:'',
            type_pagamento:'',
            type_pagamentoMoney:'',
            type_pagamentoPix:'',
            parcelas: []
        },
        atendimento: {

        }

    }
};
// initial state
const state = getDefaultState();
const mutations = {
    setURL_ROOT(state, link){
        state.ROOT_API = link;
        //console.log( state.ROOT_API, 'hue' );
    },
    setInformation_Profissional(state, payload){
        state.information_profissional = payload;
    },
    setAtendimento(state, payload){
        state.atendimento = payload;
    },
    setEstados(state, payload){
        state.estados = payload;
    },
};
const actions = {
    async getCidades ({commit}) {

        const response = await api.get('/estados?_embed=cidades');        
        return await response.data;
    },

    async getEspecialidade({commit}) {

        const response = await api.get('/especialidades');
        return await response.data;
    }
};
const getters = {
    ROOT_API(state){
        return state.ROOT_API;
    },
    InformationProfissional(state){
        return state.information_profissional;
    },
    Atendimento(state){
        return state.atendimento;
    }
};
export default {
    state,
    mutations,
    actions,
    getters,
}