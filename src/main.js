import Vue from 'vue'
import axios from 'axios'
import router from './router'
import Vant, { Lazyload } from 'vant'
import vueHeadful from 'vue-headful'
import VeHistogram from 'v-charts/lib/histogram.common'
import VeBmap from 'v-charts/lib/bmap.common'

import { commonTools } from './static/js/common'
import './static/css/font/iconfont'

import 'vant/lib/index.css'
import './static/css/common.css'

import App from './App.vue'

Vue.use(Vant)
Vue.prototype.$commonTools = commonTools
Vue.use(Lazyload)
Vue.component('vue-headful', vueHeadful)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeBmap.name, VeBmap)

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* router.beforeEach((to, from, next) => {
  /!* indexOf 不等于-1是查到了这个字符串,表示是微信里的浏览器 *!/
  let isWeiXin = () => { return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1 }
  if (isWeiXin()) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      /!* 如何判断之前是否有code *!/
      /!* 第一次进入项目 *!/
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
        'appid=wx99970402087a2872' +
        '&redirect_uri=http://larabbs.test' +
        '&response_type=code' +
        '&scope=snsapi_userinfo' +
        '&state=STATE#wechat_redirect'

      /!* 之前授权过 *!/
    } else {
      next()
    }
  } else {
    alert('请在微信浏览器中打开')
    return false
  }
}) */

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
