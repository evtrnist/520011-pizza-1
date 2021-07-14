<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                :class="'dough__input dough__input--' + value"
                v-for="{ id, name, description, value, isChecked } in doughs"
                :key="id"
              >
                <input
                  type="radio"
                  name="dough"
                  :value="value"
                  class="visually-hidden"
                  :checked="isChecked"
                />
                <b>{{ name }}</b>
                <span>{{ description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                :class="'diameter__input diameter__input--' + value"
                v-for="{ id, name, isChecked, value } in sizes"
                :key="id"
              >
                <input
                  type="radio"
                  name="diameter"
                  :value="value"
                  class="visually-hidden"
                  :checked="isChecked"
                />
                <span>{{ name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label
                  class="radio ingredients__input"
                  v-for="{ id, name, value, isChecked } in sauces"
                  :key="id"
                >
                  <input
                    type="radio"
                    name="sauce"
                    :value="value"
                    :checked="isChecked"
                  />
                  <span>{{ name }}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li
                    class="ingredients__item"
                    v-for="{ name, id, value, slug } in ingredients"
                    :key="id"
                  >
                    <span :class="'filling filling--' + slug">{{ name }}</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button
                        type="button"
                        class="
                          counter__button
                          counter__button--disabled
                          counter__button--minus
                        "
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        :value="value"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
};
</script>

<style lang="scss" scoped></style>
