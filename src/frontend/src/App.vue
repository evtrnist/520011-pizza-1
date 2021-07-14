<template>
  <div id="app">
    <IndexLayout />
  </div>
</template>

<script>
import IndexLayout from "@/views/Index.vue";
export default {
  name: "App",
  components: {
    IndexLayout,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
