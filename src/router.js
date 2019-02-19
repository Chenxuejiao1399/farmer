import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/propaganda',
      name: 'Propaganda',
      component: () => import(/* webpackChunkName: "Propaganda" */ './views/information/Propaganda'),
      meta: {
        title: '宣传天地',
        requiresAuth: false
      }
    },
    {
      path: '/agriculture',
      name: 'Agriculture',
      component: () => import(/* webpackChunkName: "Agriculture" */ './views/information/Agriculture'),
      meta: {
        title: '农业气象',
        requiresAuth: false
      }
    },
    {
      path: '/training',
      name: 'Training',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/Training'),
      meta: {
        title: '培训天地',
        requiresAuth: false
      }
    },
    {
      path: '/studyvideo',
      name: 'StudyVideo',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/StudyVideo'),
      meta: {
        title: '学习视频',
        requiresAuth: false
      }
    },
    {
      path: '/offlinelearning',
      name: 'OfflineLearning',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/OfflineLearning'),
      meta: {
        title: '线下学习',
        requiresAuth: false
      }
    },
    {
      path: '/activitydetails',
      name: 'ActivityDetails',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/ActivityDetails'),
      meta: {
        title: '活动详情',
        requiresAuth: false
      }
    },
    {
      path: '/registeredlist',
      name: 'RegisteredList',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/RegisteredList'),
      meta: {
        title: '已报名列表',
        requiresAuth: false
      }
    },
    {
      path: '/launchacitivity',
      name: 'LaunchAcitivity',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/LaunchAcitivity'),
      meta: {
        title: '发起活动',
        requiresAuth: false
      }
    },
    {
      path: '/onlinelist',
      name: 'OnlineList',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/OnlineList'),
      meta: {
        title: '线上交流',
        requiresAuth: false
      }
    },
    {
      path: '/onlinechat',
      name: 'OnlineChat',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/OnlineChat'),
      meta: {
        title: '线上交流',
        requiresAuth: false
      }
    },
    {
      path: '/homevillage',
      name: 'HomeVillage',
      component: () => import(/* webpackChunkName: "HomeVillage" */ './views/assistance/homeVillage/HomeVillage'),
      meta: {
        title: '本村项目',
        requiresAuth: false
      }
    }
  ]
})
