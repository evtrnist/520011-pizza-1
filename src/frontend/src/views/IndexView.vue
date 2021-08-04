<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector :doughs="pizza.dough" @setItem="setItem" />

        <BuilderSizeSelector :sizes="pizza.sizes" @setItem="setItem" />

        <BuilderIngredientsSelector
          @setItem="setItem"
          @setIngredients="setIngredients"
          :sauces="pizza.sauces"
          :ingredients="pizza.ingredients"
        />

        <div class="content__pizza">
          <BuilderPizzaName @changeName="changeName" />

          <BuilderPizzaImage
            :selected-items="selectedItems"
            @drop="setIngredients"
            @setIngredients="setIngredients"
          />

          <BuilderPriceCounter
            :price="pizzaPrice"
            :is-disabled="!pizza.name || !selectedItems.ingredients.length"
          />
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import misc from "@/static/misc.json";
import user from "@/static/user.json";
import pizza from "@/static/pizza.json";

import getPizzaData from "@/common/getPizzaData";
import getSelectedPizzaItem from "@/common/getSelectedPizzaItem";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaImage from "@/modules/builder/components/BuilderPizzaImage";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import BuilderPizzaName from "@/modules/builder/components/BuilderPizzaName";

export default {
  name: "IndexView",
  data() {
    return {
      misc,
      user,
      pizza: getPizzaData(pizza),
    };
  },
  computed: {
    selectedItems() {
      return {
        dough: getSelectedPizzaItem(this.pizza, "dough"),
        size: getSelectedPizzaItem(this.pizza, "sizes"),
        sauce: getSelectedPizzaItem(this.pizza, "sauces"),
        ingredients: this.pizza.ingredients.filter((item) => item.count),
      };
    },

    pizzaPrice() {
      const doughPrice = this.selectedItems.dough.price;
      const saucePrice = this.selectedItems.sauce.price;
      const inredientsPrice = this.selectedItems.ingredients.reduce(
        (acc, curr) => {
          const { count, price } = curr;
          return acc + count * price;
        },
        0
      );
      const multiplier = this.selectedItems.size.multiplier;
      return (doughPrice + saucePrice + inredientsPrice) * multiplier;
    },
  },
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaImage,
    BuilderPriceCounter,
    BuilderPizzaName,
  },
  methods: {
    setItem(value, type) {
      this.pizza[type] = this.pizza[type].map((item) => ({
        ...item,
        isChecked: item.value === value,
      }));
    },

    setIngredients(count, ingredient) {
      if (!ingredient) {
        return;
      }

      const updatedIngredient = {
        ...ingredient,
        count,
      };

      this.pizza.ingredients = this.pizza.ingredients.map((item) => {
        return item.value === updatedIngredient.value
          ? updatedIngredient
          : item;
      });
    },
    changeName(name) {
      this.pizza.name = name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
