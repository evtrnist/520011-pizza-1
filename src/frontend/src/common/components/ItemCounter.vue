<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      @click="clickHandler($event, -1)"
      :disabled="item.count === ItemCount.MIN"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="item.count"
      @change="setItemCount"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="clickHandler($event, 1)"
      :disabled="item.count === ItemCount.MAX"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    item: {
      type: Object,
      require: true,
    },
    ItemCount: {
      type: Object,
      require: true,
    },
  },
  methods: {
    setItemCount(evt) {
      if (
        evt.target.value > this.ItemCount.MAX ||
        evt.target.value < this.ItemCount.MIN
      ) {
        evt.target.value = this.ItemCount.MAX;
        return; //showing error?
      }
      this.$emit("setCount", evt.target.value, this.item);
    },
    clickHandler(evt, summand) {
      const newValue = this.item.count + summand;
      this.$emit("setCount", newValue, this.item);
    },
  },
};
</script>

<style lang="scss" scoped></style>
