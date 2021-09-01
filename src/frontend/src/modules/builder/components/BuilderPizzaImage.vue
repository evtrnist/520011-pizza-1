<template>
  <AppDrop @dropHandler="dropHandler">
    <div class="content__constructor">
      <div
        class="pizza"
        :class="`pizza--foundation--${
          selectedItems.dough.value === 'light' ? 'small' : 'big'
        }-${selectedItems.sauce.value}`"
      >
        <div class="pizza__wrapper">
          <div
            v-for="item in ingredientsFilling"
            :key="item.id"
            class="pizza__filling"
            :class="item.class"
          ></div>
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import { COUNT_TO_WORD } from "@/common/constants";

const BASE_FILLING_CLASS = "pizza__filling--";

export default {
  name: "BuilderPizzaImage",
  props: {
    selectedItems: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      COUNT_TO_WORD,
    };
  },
  computed: {
    ingredientsFilling() {
      return this.selectedItems.ingredients.reduce((acc, curr) => {
        const classes = [];
        for (let i = 1; i <= curr.count; i++) {
          const ingredientMod = `${BASE_FILLING_CLASS}${curr.value}`;
          classes.push({
            id: `${curr.value}-${i}`,
            class:
              i === 1
                ? ingredientMod
                : `${ingredientMod} ${BASE_FILLING_CLASS}${COUNT_TO_WORD[i]}`,
          });
        }
        return [...acc, ...classes];
      }, []);
    },
  },
  methods: {
    dropHandler($event) {
      const newCount = $event.count + 1;
      this.$emit("setIngredients", newCount, $event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
