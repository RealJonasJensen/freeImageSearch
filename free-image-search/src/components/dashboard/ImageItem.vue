<template>
        <div class="img-item" @click="click(item)" @mouseover="hoverOn" @mouseout="hoverOff" >
                <img :src="item.webformatURL" :height="item.previewHeight" :width="item.previewWidth" :alt="item.webformatURL">
                <div :style="[imgBar,imgBarLeft]"></div><div :style="[imgBar,imgBarRight]"></div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      imgBar: {
        display: "block",
        backgroundColor: "rgb(40, 126, 238)",
        height: 5 + "px",
        width: 0 + "%",
        transition: "all .5s"
      },
      imgBarLeft: {
        float: "left"
      },
      imgBarRight: {
        float: "right"
      }
    };
  },
  methods: {
    hoverOn() {
      this.imgBar.width = 50 + "%";
    },
    hoverOff() {
      this.imgBar.width = 0;
    }
  },
  props: ["item", "click"]
};
</script>

<style scoped>
.img-item {
  border-radius: 10px;
  margin: 5%;
  cursor: pointer;
}

.img-item img {
  display: block;
  border-radius: 3px 3px 0 0;
  height: 100%;
  width: 100%;
}
</style>
