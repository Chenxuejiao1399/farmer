import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import router from './router'
import store from '@/store/store.js'
import Vant, {
  Lazyload
} from 'vant'
import vueHeadful from 'vue-headful'
import VeHistogram from 'v-charts/lib/histogram.common'
import {
  commonTools
} from './static/js/common'
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
Vue.prototype.$qs = qs

router.beforeEach((to, from, next) => {
  //这里判断进入的页面是否需要权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = commonTools.getCookie('user_token') //从cookie中取token
    if (!token) {
      //console.log("当前没有token")
      // 没有token 则用code去后台换取access_token
      let code = commonTools.getUrlParams('code', window.location.search)
      if (code) {
        // 有code发送给后台取token
        axios({
            method: 'post',
            url: commonTools.g_restUrl + '/authorizations',
            data: {
              code: code
            }
          })
          .then(function (response) {
            if (response) {
              commonTools.setCookie('user_token', JSON.stringify(response.data.access_token), 60) // 存用户的token(60分钟)
              next()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        window.location.href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?' +
          'appid=wxc7d5193b4099c128' +
          '&redirect_uri=http%3a%2f%2f127.0.0.1%3a8080%2f' +
          '&response_type=code' +
          '&scope=snsapi_userinfo' +
          '&state=123#wechat_redirect'
      }
    } else if (token) {
      // 如果有token，先调用token刷新方法
      commonTools
        .checkToken()
        .then(function (res) {
          let token = commonTools.getCookie('user_token') // 从cookie中获取token
          let newToken = token.replace('"', '').replace('"', '')

          axios({
              method: 'get',
              url: commonTools.g_restUrl + '/auth/role', //获取用户权限信息
              headers: {
                'Authorization': 'Bearer' + newToken
              }
            })
            .then(function (response) {
              if (response.status === 200) {
                store.dispatch('setUserRole', response.data.role_id) //将用户权限id存在store中
                axios({
                    method: 'get',
                    url: commonTools.g_restUrl + '/user/verify', // 验证用户绑定接口
                    headers: {
                      'Authorization': 'Bearer' + newToken
                    }
                  })
                  .then(function (response) {
                    // 如果用户已绑定
                    if (response.data.code == 100001) {
                      if (store.state.userRole == to.meta.roleId) {
                        next()
                      } else if (store.state.userRole < to.meta.roleId) {
                        alert('您的权限不够，不能浏览该页面')
                        next(false)
                      } else if (store.state.userRole > to.meta.roleId) {
                        next()
                      }
                      //next()
                      //在这里做权限判断
                    } else if (response.data.code == 100013) {
                      //在用户信息未绑定的情况下如果用户去的页面是登录页则跳转
                      if (to.path === '/register') {
                        next() //注意在router.beforeEach中一定要用next()来跳出导航循环
                      } else {
                        //如果用户去的页面不是登录页则跳转登录页
                        next('/register')
                      }
                    }
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
