<template>
  <div>
    <link rel="stylesheet" href="/styles/fonts.css">
    <link rel="stylesheet" href="/styles/popup.css">
    <div v-if="admintool"  >
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
    <router-view  @popup="popupToggle"></router-view>
    <popup @popup="popupToggle" :title='popupTitle' :context='popupContext' :class="{'popup-active':popupflag}"/>
  </div>
</template>

<script>
// import func from "../vue-temp/vue-editor-bridge";
// import VueRouter from 'vue-router'
// import signup from './components/signup';
import popup from './components/popup';
// import config from './config';

export default {
  name: "App",
  data: function () {
    return {
      popupTitle:'',
      popupContext:'',
      testc:0,
      admintool: false,
      popupflag:false,
    };
  },
  methods: { 
        popupToggle(data){
          console.log(data);
            this.popupflag = !this.popupflag;
            this.popupTitle = data.Title;
            this.popupContext = data.Context;
        },
    test:function(){
      console.log('emit');
    },
  },
  components: {popup},
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
