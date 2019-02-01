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
    }

  ]
})
