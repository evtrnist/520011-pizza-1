import { uniqueId } from "lodash";
import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules";
import VuexPlugins from "@/plugins/vuexPlugins";
import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
  SET_ENTITY,
  ADD_ENTITY,
  UPDATE_ENTITY,
  DELETE_ENTITY,
} from "./mutation-types";
import { MESSAGE_LIVE_TIME } from "@/common/constants";
import jsonMisc from "@/static/misc.json";
import jsonUser from "@/static/user.json";

Vue.use(Vuex);

const state = () => ({
  notifications: [],
  users: [],
});

const actions = {
  async init({ dispatch }) {
    dispatch("fetchUser");
    dispatch("Builder/query");
    dispatch("Cart/query");
    dispatch("Orders/query");
  },

  async createNotification({ commit }, { ...notification }) {
    const uniqueNotification = {
      ...notification,
      id: uniqueId(),
    };

    commit(ADD_NOTIFICATION, uniqueNotification);

    setTimeout(
      () => commit(DELETE_NOTIFICATION, uniqueNotification.id),
      MESSAGE_LIVE_TIME
    );
  },

  fetchUser({ commit }) {
    const user = jsonUser;

    commit(SET_ENTITY, {
      module: null,
      entity: "user",
      value: user,
    });
  },
};

const mutations = {
  [ADD_NOTIFICATION](state, notification) {
    state.notification = [...state.notifications, notification];
  },

  [DELETE_NOTIFICATION](state, id) {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== id
    );
  },

  // присвоение сущности

  [SET_ENTITY](state, { module, entity, value }) {
    module ? (state[module][entity] = value) : (state[entity] = value);
  },

  [ADD_ENTITY](state, { module, entity, value }) {
    if (module) {
      state[module][entity] = [...state[module][entity], value];
    } else {
      module[entity] = [...state[entity], value];
    }
  },

  [DELETE_ENTITY](state, { module, entity, id }) {
    if (module) {
      state[module][entity] = state[module][entity].filter(
        (e) => +e.id !== +id
      );
    } else {
      state[entity] = state[entity].filter((e) => +e.id !== +id);
    }
  },

  [UPDATE_ENTITY](state, { module, entity, value }) {
    // делаем для указанного модуля
    if (module) {
      const index = state[module][entity].findIndex(
        ({ id }) => id === value.id
      );

      if (~index) {
        state[module][entity].splice(index, 1, value);
      }
    }
    // делаем для корневого модуля
    else {
      const index = state[entity].findIndex(({ id }) => id === value.id);

      if (~index) {
        state[entity].splice(index, 1, value);
      }
    }
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [VuexPlugins],
  modules,
});
