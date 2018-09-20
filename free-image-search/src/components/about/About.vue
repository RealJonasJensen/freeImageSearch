<template>
    <div class="about">
            <div class="about-info">
                <div>
                    <h3>This page was made with:</h3>
                    <br>
                    <ul>
                        <li> - VueJS</li>
                        <li> - VueX</li>
                        <li> - VueRouter</li>
                        <br>
                        <p>Special thanks to Pixabay for letting me use their API!</p>

                    </ul>
                </div>
                <div class="about-img">
                    <img src="../../assets/logoVue.png" alt="VueJs"></div>
                </div>
    </div>
</template>

<script>
</script>

<style scoped>
.about {
  width: 800px;
  margin: 0 auto 100px;
}

.about-info {
  margin: 50px 0;
  display: grid;
  grid-template-columns: 50% 50%;
}

img {
  display: block;
  width: 50%;
  margin: 0 auto;
}

ul {
  list-style-type: none;
}
li {
  margin-left: 10px;
}
@media screen and (max-width: 800px) {
  .about {
    width: 100%;
  }
  .about-info {
    display: block;
  }
}
</style>
