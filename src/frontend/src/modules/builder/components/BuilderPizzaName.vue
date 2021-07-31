<template>
  <label class="input">
    <span class="visually-hidden">Название пиццы</span>
    <input
      type="text"
      name="pizza_name"
      placeholder="Введите название пиццы"
      @input="inputHandler"
    />
  </label>
</template>

<script>
export default {
  name: "BuilderPizzaName",
  methods: {
    inputHandler(evt) {
      this.$emit("changeName", evt.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
