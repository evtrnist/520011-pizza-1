<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector :doughs="doughs" />

        <BuilderSizeSelector :sizes="sizes" />

        <BuilderIngredientsSelector
          :ingredients="ingredients"
          :sauces="sauces"
        />

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button button--disabled" disabled>
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import misc from "@/static/misc.json";
import user from "@/static/user.json";
import pizza from "@/static/pizza.json";

import normalizeDough from "@/common/normalizeDough";
import normalizeSizes from "@/common/normalizeSizes";
import normalizeSauces from "@/common/normalizeSauces";
import normalizeIngredients from "@/common/normalizeIngredients";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";

export default {
  name: "IndexLayout",
  data() {
    return {
      misc,
      user,
      doughs: pizza.dough.map((item, index) => normalizeDough(item, index)),
      ingredients: pizza.ingredients.map((item) => normalizeIngredients(item)),
      sauces: pizza.sauces.map((item, index) => normalizeSauces(item, index)),
      sizes: pizza.sizes.map((item, index) => normalizeSizes(item, index)),
    };
  },
  computed: {},
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
  },
};
</script>

<style lang="scss" scoped></style>
