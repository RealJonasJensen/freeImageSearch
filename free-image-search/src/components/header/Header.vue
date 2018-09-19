<template>
    <header>
        <div class="header-img">
            <img src="../../assets/logo.png" alt="Logo">
            <h2>ImageSearch!</h2>
        </div>
        <div class="header-input" >
            <form @submit.prevent="onSubmit" >
                <input type="text" placeholder="Search" v-model="search">
                <button type="submit" >Search</button>
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
      search: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("HEJ");
      this.$router.push("/");
      this.$store.dispatch("fetchData", this.search);
    }
  }
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 50px;
  border-bottom: 1px grey solid;
  background-color: rgb(248, 252, 255);
  display: flex;
}

h2 {
  font-family: "Poiret One", cursive;
  margin-left: 10px;
}

.header-img {
  display: flex;
  width: 20%;
  padding-top: 6px;
  padding-left: 20px;
}

.header-img img {
  width: 20%;
  height: 90%;
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
  border-radius: 10px;
  border: 0.5px solid rgb(103, 103, 103);
  outline: none;
}

button {
  width: 10%;
  height: 30px;
  margin-top: 7px;
  outline: none;
  margin-left: 5px;
  border-radius: 10px;
  cursor: pointer;
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
  /* background-color: rgb(138, 0, 0); */
}

a {
  text-decoration: none;
  color: rgb(138, 0, 0);
}
</style>
