<template>
  <div>
      <router-link to="/" exact>Landing</router-link><br/>
      <router-link to="/main">main</router-link><br/>
      <router-link to="/login">Login</router-link><br/>
      <router-link to="/signup">SignUp</router-link><br/>
      <router-link to="/error">error</router-link><br/>
      <router-link to="/newMain">newMain</router-link><br/>
      <hr/>
      <router-view></router-view>
  </div> 
</template>

<script>
// import VueRouter from 'vue-router'
// import signup from './components/signup';
// import login from './components/login';
// import config from './config';

export default {
  name: 'App',
  methods:{

  },
  components: {
  }
}
</script>

<style>
a.router-link-active, li.router-link-active>a {
  color: red;
}
</style>
