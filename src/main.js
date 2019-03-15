import Vue from 'vue'
import axios from 'axios'
import router from './router'
import Vant, { Lazyload } from 'vant'
import vueHeadful from 'vue-headful'
import VeHistogram from 'v-charts/lib/histogram.common'
import { commonTools } from './static/js/common'
import './static/css/font/iconfont'
import './static/css/font_weather/iconfont'
import 'vant/lib/index.css'
import './static/css/common.css'
import App from './App.vue'
Vue.use(Vant)
Vue.prototype.$commonTools = commonTools
Vue.use(Lazyload)
Vue.component('vue-headful', vueHeadful)
Vue.component(VeHistogram.name, VeHistogram)

Vue.config.productionTip = false
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = commonTools.getCookie('user_token')
    if (!token) { // 没有token
      let code = commonTools.getUrlParams('code', window.location.search)
      if (code) { // 有code发送给后台取用户信息
        axios({
          method: 'post',
          url: commonTools.g_restUrl + '/authorizations',
          data: {
            code: code
          }
        })
          .then(function (response) {
            if (response) {
              commonTools.setCookie('user_token', JSON.stringify(response.data.access_token), 1)// 存用户的token
              next()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
          'appid=wx8424b50f28a525e1' +
          '&redirect_uri=http%3a%2f%2fwww.companycheck.cn' +
          '&response_type=code' +
          '&scope=snsapi_userinfo' +
          '&state=123#wechat_redirect'
      }
    } else if (token) {
      let newToken = token.replace('"', '').replace('"', '')
      axios({
        method: 'get',
        url: commonTools.g_restUrl + '/user',
        headers: { 'Authorization': 'Bearer' + newToken },
        params: {}
      })
        .then(function (response) {
          next()
        })
        .catch(function (error) {
          console.info(error)
        })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
