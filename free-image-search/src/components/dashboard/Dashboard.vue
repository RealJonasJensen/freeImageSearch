<template>
    <div>
        <div>
            <p>
                Search 
            </p>
        </div>
        <app-backdrop :show="show" :toggle="toggleBackdrop" ></app-backdrop>
        <app-modal :show="show"></app-modal>
        <div v-if="loading" >
            <app-spinner></app-spinner>
        </div>
        <div class="dashboard-img" v-else>
            <app-image-item :click="showImage" v-for="(item, index) in images" :key="index" :item=item></app-image-item>
        </div>
    </div>
</template>

<script>
import ImageItem from "./ImageItem";
import Spinner from "../UI/Spinner";
import Backdrop from "../UI/Backdrop";
import Modal from "../UI/Modal";

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleBackdrop() {
      this.show = !this.show;
    },
    showImage(img) {
      this.show = !this.show;
      this.$store.commit("setImage", img);
    }
  },

  computed: {
    images() {
      return this.$store.getters.images;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  components: {
    appImageItem: ImageItem,
    appSpinner: Spinner,
    appBackdrop: Backdrop,
    appModal: Modal
  }
};
</script>

<style scoped>
.dashboard-img {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
