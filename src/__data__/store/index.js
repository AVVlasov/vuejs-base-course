import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as types from '../constants/mutation-types'
import { API_URLS } from '../constants/api-urls'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        async getUsers({commit}, params) {
            console.log('params', params)
            try {
                const res = await axios.get(API_URLS.RANDOM_USERS, {
                    params: {
                        gender: params.gender,
                        results: params.searchParams
                    }
                });
                
                if(res){
                    const { results } = res.data;
                    console.log('results', results)
                    commit(types.GET_USER, results);
                }
            } catch (e) {
                console.log(e)
            }
                
        }
    },
    mutations: {
        [types.GET_USER](state, results) {
            state.users = results;
        }
    },
    getters: {
        getUsers: (state) => state.users
    }
})