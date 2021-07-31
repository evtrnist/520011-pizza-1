<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <LabelItem
          v-for="item in doughs"
          :key="item.id"
          :item="item"
          :classes="'dough__input dough__input--' + item.value"
          :name="'dough'"
          @setOption="setOption"
        >
          <b>{{ item.name }}</b>
          <span>{{ item.description }}</span>
        </LabelItem>
      </div>
    </div>
  </div>
</template>

<script>
import LabelItem from "@/common/components/LabelItem";
export default {
  name: "BuilderDoughSelector",
  components: {
    LabelItem,
  },
  props: {
    doughs: {
      type: Array,
      require: true,
    },
  },
  methods: {
    setOption(data) {
      this.$emit("setItem", data, "dough");
    },
  },
};
</script>

<style lang="scss" scoped></style>
