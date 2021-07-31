<template>
  <label :class="classes">
    <input
      type="radio"
      :name="name"
      :value="item.value"
      class="visually-hidden"
      :checked="item.isChecked"
      @input="setOption"
    />
    <slot />
  </label>
</template>

<script>
export default {
  name: "LabelItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    classes: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    setOption(evt) {
      this.$emit("setOption", evt.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
