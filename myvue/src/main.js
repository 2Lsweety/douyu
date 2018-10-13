// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/font-awesome/css/font-awesome.css';

import axios from 'axios';
import $ from './assets/jquery';

// 导入ui模块及样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 加载组件
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
