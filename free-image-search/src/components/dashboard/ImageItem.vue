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
        backgroundColor: "rgb(116, 0, 0)",
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

.img-item img:hover {
  -animation: leftToRight 1s ease-in forwards;
}

.img-item img {
  display: block;
  border-radius: 3px 3px 0 0;
  height: 100%;
  width: 100%;
}

.img-bar {
  background-color: rgb(116, 0, 0);
  height: 10px;
  width: 50%;
  display: none;
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

@keyframes leftToRight {
  from {
    width: 0px;
    display: none;
  }
  to {
    width: 100%;
    display: inline-block;
  }
}
</style>
