import Vue from 'vue'
import ElementUI from 'element-ui'; // 2.1引入结构
import 'element-ui/lib/theme-chalk/index.css'; // 2.2引入样式
import App from './App.vue'
import axios from 'axios'
import axios1 from './axios1'
import VueRouter from 'vue-router'
import router from './router';
import infiniteScroll from 'vue-infinite-scroll'

import VueCookies from 'vue-cookies';
//md书写
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import Prism from 'prismjs'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'


//md预览
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'	//解决编辑器的功能显示问题
Vue.use(mavonEditor);

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

Vue.use(VueMarkdownEditor);
Vue.use(VueCookies)

Vue.use(ElementUI); // 3.安装
Vue.prototype.$axios= axios
Vue.prototype.$ajax= axios1
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(infiniteScroll)
new Vue({
  render: h => h(App),
  router,

}).$mount('#app')

