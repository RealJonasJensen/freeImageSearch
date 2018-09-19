<template>
    <div>
        <div v-if="show" class="backdrop" @click="toggle"></div>
    </div>
</template>

<script>
export default {
  props: ["show", "toggle"]
};
</script>

<style scoped>
.backdrop {
  background-color: #000;
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 500;
  cursor: pointer;
}
</style>
