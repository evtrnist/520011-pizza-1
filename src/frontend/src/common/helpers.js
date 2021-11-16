import { PIZZA_VALUES_BY_NAME } from "./constants";

export const capitalize = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const normalizeBuilderData = (pizza) => ({
  dough: (pizza.dough || []).map((dough, index) => ({
    ...dough,
    value: PIZZA_VALUES_BY_NAME.dough[dough.name],
    isChecked: index === 0,
  })),
  sizes: (pizza.sizes || []).map((size, index) => ({
    ...size,
    value: PIZZA_VALUES_BY_NAME.sizes[size.name],
    isChecked: index === 0,
  })),
  sauces: (pizza.sauces || []).map((sauce, index) => ({
    ...sauce,
    value: PIZZA_VALUES_BY_NAME.sauces[sauce.name],
    isChecked: index === 0,
  })),
  ingredients: (pizza.ingredients || []).map((ingridient) => ({
    ...ingridient,
    value: PIZZA_VALUES_BY_NAME.ingredients[ingridient.name],
    count: 0,
  })),
  name: "",
  price: 0,
});

export const getSelectedPizzaItem = (pizza, name) => {
  return pizza[name] && pizza[name].find((item) => item.isChecked);
};
