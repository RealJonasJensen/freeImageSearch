<template>
    <transition name="show">
        <div v-if="show" >
            <img :src="image.largeImageURL" :alt="image.largeImageURL">
        </div>
</transition>
</template>

<script>
export default {
  props: ["show"],
  computed: {
    image() {
      return this.$store.getters.image;
    }
  }
};
</script>

<style scoped>
div {
  background-color: #fff;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  top: 40px;
  left: 0;
  right: 0;
  width: 75%;
  height: auto;
  z-index: 1000;
  max-height: 90%;
  overflow-y: auto;
}

div img {
  height: 100%;
  width: 100%;
  display: block;
  border: 3px #fff solid;
}

.show-enter-active {
  animation: maxIn 1s ease-out forwards;
}

.show-leave-active {
  animation: shrinkOut 500ms ease-out forwards;
}

@keyframes maxIn {
  from {
    width: 10px;
    height: 10px;
    opacity: 0;
  }
  to {
    opacity: 1;
    width: 75%;
    height: auto;
  }
}

@keyframes shrinkOut {
  from {
    opacity: 1;
    width: 75%;
    height: auto;
  }
  to {
    width: 10px;
    height: 10px;
    opacity: 0;
  }
}
</style>
