// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'  // import 'vue-resource'
import vueRouter from 'vue-router'
import App from './App'   // main "App" compoment

import Users from './components/Users'
import Test from './components/Test'

Vue.config.productionTip = false

Vue.use(vueResource)      // use 'vueResource' run through the middleware
Vue.use(vueRouter)        // use 'vueRouter'

const router = new vueRouter( {
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Users },
    { path: '/xxx', component: Test}
  ]
});

/* eslint-disable no-new */
new Vue({
//  el: '#app',           // attach to element with an id of "app"
//  template: '<App/>',   // template of App component
//  components: { App }   // bring in the App component

    router,
    template: 
      `<div id="app">
        <ul>
          <li><router-link to="/">Users</router-link></li>
          <li><router-link to="/xxx">Test</router-link></li>
        </ul>
        <router-view></router-view>
      </div>`,
}).$mount('#app')
