<template>
  <div
    :class="`draggable ${!isDraggable ? 'draggable--disabled' : ''}`"
    :draggable="isDraggable"
    @dragstart.self="dragHandler"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
import { DATA_TRANSFER_PAYLOAD, MOVE } from "@/common/constants";

export default {
  name: "AppDrag",
  props: {
    transferData: {
      type: Object,
      required: true,
    },
    isDraggable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    dragHandler({ dataTransfer }) {
      dataTransfer.effectAllowed = MOVE;
      dataTransfer.dropEffect = MOVE;
      dataTransfer.setData(
        DATA_TRANSFER_PAYLOAD,
        JSON.stringify(this.transferData)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.draggable {
  cursor: grab;
  &--disabled {
    cursor: default;
  }
}
</style>
