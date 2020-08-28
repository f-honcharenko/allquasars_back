<template>
  <div>
    <div v-if="admintool">
      <router-link to="/" exact>Landing</router-link>
      <br />
      <router-link to="/main">main</router-link>
      <br />
      <router-link to="/login">Login</router-link>
      <br />
      <router-link to="/signup">SignUp</router-link>
      <br />
      <router-link to="/error">error</router-link>
      <br />
      <router-link to="/newMain">newMain</router-link>
      <br />
      <hr />
    </div>
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
// import func from "../vue-temp/vue-editor-bridge";
// import VueRouter from 'vue-router'
// import signup from './components/signup';
// import login from './components/login';
// import config from './config';

export default {
  name: "App",
  data: function () {
    return {
      admintool: false,
    };
  },
  methods: {},
  components: {},
};
</script>

<style>
a.router-link-active,
li.router-link-active > a {
  color: red;
}
/* .fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.03s ease;
} */
</style>
