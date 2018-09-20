<template>
    <div>
        <div class="dashboard-text" >
            <p v-if="!searched"  >
                Search anything!
            </p>
            <p v-else-if="searched && images.length === 0" >
                There was 0 results with that search.
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
    },
    searched() {
      return this.$store.getters.searched;
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

.dashboard-text p {
  font-size: 2em;
  text-align: center;
  margin: 100px 0 100px 0;
}

@media screen and (max-width: 800px) {
  .dashboard-img {
    grid-template-columns: 50% 50%;
  }
}
@media screen and (max-width: 500px) {
  .dashboard-img {
    grid-template-columns: 100%;
  }
}
</style>
