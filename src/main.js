import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import landing from './components/landing'
import signup from './components/signup'
import login from './components/login'
// import main from './components/main'
import error from './components/error'
import userCard from './components/userCard'
import newMain from './components/newMain'

Vue.use(VueRouter);
userCard
const routes = [
  { path: '/', component: landing },
  { path: '/error', component: error },
  { path: '/main', component: newMain },
  { path: '/signup', component: signup },
  { path: '/login', component: login },
  // { path: '/newMain', component: newMain },
  { path: '/user/:id', component: userCard, name:'user' }
];

const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => {
    return h(App)
  }
});