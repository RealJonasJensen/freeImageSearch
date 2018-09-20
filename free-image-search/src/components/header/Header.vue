<template>
    <header>
        <div class="header-img">
                <img src="../../assets/logo.png" alt="Logo">
            <router-link to="/">
                <h2>ImageSearch</h2>
            </router-link>
        </div>
        <div class="header-input" >
            <form @submit.prevent="onSubmit" >
                <input type="text" placeholder="" v-model="search">
                <button type="submit">Search</button>
            </form>
        </div>
        <ul class="header-ul">
            <li>
                <router-link to="/">HOME</router-link>
            </li>
            <li>
                <router-link to="/about">ABOUT</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      searchTerms: ["forest", "ocean", "city", "sports", "movie", "famous"]
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/");
      this.$store.dispatch("fetchData", this.search);
    }
  },
  created() {
    const ranNum = Math.floor(Math.random() * this.searchTerms.length);
    this.$store.dispatch("fetchData", this.searchTerms[ranNum]);
  }
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 50px;
  border-bottom: 2px grey solid;
  background-color: rgb(28, 28, 28);
  display: flex;
}

h2 {
  cursor: pointer;
  font-family: "Poiret One", cursive;
  margin: 3px 0 0 15px;
  color: rgb(223, 223, 223);
}

.header-img {
  display: flex;
  width: 20%;
  padding-top: 6px;
  padding-left: 20px;
}

.header-img img {
  width: 45px;
  height: 45px;
  padding-bottom: 5px;
}

.header-input {
  width: 50%;
}

form {
  display: flex;
}

input {
  width: 90%;
  padding: 4px;
  margin-top: 7px;
  height: 30px;
  background-color: rgb(223, 223, 223);
  border-radius: 5px;
  border: 0.5px solid rgb(103, 103, 103);
  outline: none;
}

button {
  width: 10%;
  height: 30px;
  margin-top: 7px;
  outline: none;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(223, 223, 223);
}

.header-ul {
  width: 30%;
  display: flex;
}

li {
  list-style-type: none;
  margin-top: 15px;
  width: 50%;
  height: 50px;
  text-align: center;
}

a {
  text-decoration: none;
  color: rgb(223, 223, 223);
}

@media screen and (max-width: 1100px) {
  input {
    width: 60%;
    margin-left: 75px;
  }
  button {
    width: 20%;
  }
}

@media screen and (max-width: 800px) {
  header {
    display: block;
    height: auto;
    position: relative;
  }

  input {
    margin: 5px;
    width: 80%;
  }
  button {
    margin: 5px;
    width: 20%;
  }

  .header-input {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .header-ul {
    width: 100%;
  }
  .header-ul li {
    display: inline-block;
    width: 100%;
  }
}
</style>
