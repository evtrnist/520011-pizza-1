<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <LabelItem
          v-for="item in sizes"
          :key="item.id"
          :item="item"
          :classes="'diameter__input diameter__input--' + item.value"
          :name="'diameter'"
          @setOption="setOption"
        >
          <span>{{ item.name }}</span>
        </LabelItem>
      </div>
    </div>
  </div>
</template>

<script>
import LabelItem from "@/common/components/LabelItem";

export default {
  name: "BuilderSizeSelector",
  props: {
    sizes: {
      type: Array,
      require: true,
    },
  },
  components: {
    LabelItem,
  },
  methods: {
    setOption(data) {
      this.$emit("setItem", data, "sizes");
    },
  },
};
</script>

<style lang="scss" scoped></style>
