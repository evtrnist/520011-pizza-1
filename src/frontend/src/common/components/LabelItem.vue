<template>
  <label :class="classes">
    <input
      type="radio"
      :name="name"
      :value="item.value"
      class="visually-hidden"
      :checked="item.isChecked"
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
  setup() {},
};
</script>

<style lang="scss" scoped></style>
