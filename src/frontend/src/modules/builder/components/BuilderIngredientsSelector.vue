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
          >
            <span>{{ item.name }}</span>
          </LabelItem>
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

              <ItemCounter :value="value" />
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

export default {
  name: "BuilderIngredientsSelector",
  props: {
    ingredients: {
      type: Array,
      require: true,
    },
    sauces: { type: Array, require: true },
  },
  components: {
    LabelItem,
    ItemCounter,
  },
};
</script>

<style lang="scss" scoped></style>
