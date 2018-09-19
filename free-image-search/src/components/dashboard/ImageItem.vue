<template>
        <div class="img-item" @click="click(item)">
                <img :src="item.webformatURL" :height="item.previewHeight" :width="item.previewWidth" alt="">
        </div>
</template>

<script>
export default {
  props: ["item", "click"]
};
</script>

<style scoped>
.img-item {
  border-radius: 10px;
  margin: 5%;
  cursor: pointer;
}

.img-item img:hover {
  animation: draw-in 1s ease-in forwards;
}

.img-item img {
  display: block;
  border-radius: 3px;
  height: 100%;
  width: 100%;
}

@keyframes draw-in {
  25% {
    border-left: 1px solid red;
  }
  50% {
    border-left: 1px solid red;
    border-top: 1px solid red;
  }
  75% {
    border-left: 1px solid red;
    border-right: 1px solid red;
    border-top: 1px solid red;
  }
  100% {
    border-right: 1px solid red;
    border-left: 1px solid red;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
  }
}
</style>
