<template>
  <div class="app-layout-default">
    <AppLayoutHeader :is-auth="false" />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader,
  },
};
</script>
