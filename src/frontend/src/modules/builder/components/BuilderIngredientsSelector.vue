<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <LabelItem
            v-for="item in sauces"
            :key="item.id"
            :item="item"
            :name="'sauce'"
            :classes="'radio ingredients__input'"
            @setOption="setOption"
          >
            <span>{{ item.name }}</span>
          </LabelItem>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="(ingredient, index) in ingredients"
              :key="index"
            >
              <AppDrag
                :transferData="ingredient"
                :is-draggable="ingredient.count < IngredientCount.MAX"
              >
                <span :class="`filling filling--${ingredient.value}`">
                  {{ ingredient.name }}
                </span>
              </AppDrag>

              <ItemCounter
                :ItemCount="IngredientCount"
                :item="ingredient"
                @setCount="setCount"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelItem from "@/common/components/LabelItem";
import ItemCounter from "@/common/components/ItemCounter";
import AppDrag from "@/common/components/AppDrag";
import { IngredientCount } from "@/common/constants";

export default {
  name: "BuilderIngredientsSelector",
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
  components: {
    LabelItem,
    ItemCounter,
    AppDrag,
  },
  methods: {
    setOption(data) {
      this.$emit("setItem", data, "sauces");
    },
    setCount(count, data) {
      this.$emit("setIngredients", count, data);
    },
  },
  data() {
    return {
      IngredientCount,
    };
  },
};
</script>

<style lang="scss" scoped></style>
