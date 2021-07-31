import { PIZZA_VALUES_BY_NAME } from "./constants";

export default (pizza) => ({
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
});
