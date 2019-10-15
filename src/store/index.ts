import Vue from 'vue';
import Vuex from 'vuex';
import { iState } from 'src/interface/store';
Vue.use(Vuex);
const state: iState = {
  storeTest: 'storeTest'
};
export default new Vuex.Store({
  state,
  getters: {
    storeTestGetter (state) {
      return state.storeTest + ' computed';
    }
  },
  mutations: {
    editStoreTest (state: any, value: string): void {
      state.storeTest = value;
    }
  },
  modules: {
    modA: {
      namespaced: true,
      state: {
        modulesAstate: 'modulesAstate'
      },
      mutations: {
        editModAState (s, value) {
          s.modulesAstate = value;
        }
      }
    }
  }
});
