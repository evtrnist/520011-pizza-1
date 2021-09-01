import { cloneDeep } from "lodash";
import {
  SET_ENTITY,
  ADD_ENTITY,
  UPDATE_ENTITY,
  DELETE_ENTITY,
} from "../mutation-types";
import {
  normalizePizzaData,
  getSelectedPizzaItem,
  capitalize,
} from "@/common/helpers";
import jsonPizza from "@/static/pizza.json";

const entity = "builder";
const module = capitalize(entity);
const namespace = { entity, module };

export default {
  namespaced: true,
  state: {
    pizzas: [],
  },
  actions: {
    query({ commit }) {
      const data = jsonPizza;
      commit(
        SET_ENTITY,
        {
          ...namespace,
          value: data,
        },
        { root: true }
      );
    },
    post({ commit }, pizza) {
      const data = cloneDeep(pizza); // TODO: Add api call
      commit(
        ADD_ENTITY,
        {
          ...namespace,
          value: data,
        },
        { root: true }
      );
    },

    put({ commit }, pizza) {
      // TODO: Add api call
      commit(
        UPDATE_ENTITY,
        {
          ...namespace,
          value: pizza,
        },
        { root: true }
      );
    },

    delete({ commit }, id) {
      // TODO: Add api call
      commit(
        DELETE_ENTITY,
        {
          ...namespace,
          id,
        },
        { root: true }
      );
    },
  },
  getters: {
    selectedPizza() {
      return {
        dough: getSelectedPizzaItem(this.pizza, "dough"),
        size: getSelectedPizzaItem(this.pizza, "sizes"),
        sauce: getSelectedPizzaItem(this.pizza, "sauces"),
        ingredients: this.pizza.ingredients.filter((item) => item.count),
      };
    },

    pizzaPrice() {
      const doughPrice = this.selectedPizza.dough.price;
      const saucePrice = this.selectedPizza.sauce.price;
      const inredientsPrice = this.selectedPizza.ingredients.reduce(
        (acc, curr) => {
          const { count, price } = curr;
          return acc + count * price;
        },
        0
      );
      const multiplier = this.selectedPizza.size.multiplier;
      return (doughPrice + saucePrice + inredientsPrice) * multiplier;
    },
  },
};
