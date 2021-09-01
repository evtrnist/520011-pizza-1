<template>
  <main class="content">
    <router-view />
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
            :selected-items="selectedPizza"
            @drop="setIngredients"
            @setIngredients="setIngredients"
          />

          <BuilderPriceCounter
            :price="pizzaPrice"
            :is-disabled="!pizza.name || !selectedPizza.ingredients.length"
          />
        </div>
      </div>
    </form>
  </main>
</template>

<script>
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
      pizza: {},
    };
  },
  computed: {
    selectedPizza() {},

    pizzaPrice() {},
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
