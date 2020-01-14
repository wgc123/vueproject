import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 100
    },
    mutations: {
        // 方法
        increment(state) {
            state.counter++;
        },
        //
        decrement(state) {
            state.counter--;
        }
    },
    actions: {},
    getters: {},
    modules: {}
});

export default store;