import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/propaganda',
    name: 'Propaganda',
    component: () => import(/* webpackChunkName: "Propaganda" */ './views/information/Propaganda'),
    meta: {
      title: '宣传天地',
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('./components/HelloWorld'),
    meta: {
      title: '测试页面',
      requiresAuth: true
    }
  },
  {
    path: '/agriculture',
    name: 'Agriculture',
    component: () => import(/* webpackChunkName: "Agriculture" */ './views/information/Agriculture'),
    meta: {
      title: '农业气象',
      requiresAuth: true
    }
  },
  {
    path: '/liveworld',
    name: 'LiveWorld',
    component: () => import(/* webpackChunkName: "Agriculture" */ './views/information/LiveWorld'),
    meta: {
      title: '生活天地',
      requiresAuth: true
    }
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/Training'),
    meta: {
      title: '培训天地',
      requiresAuth: true
    }
  },
  {
    path: '/studyvideo',
    name: 'StudyVideo',
    component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/StudyVideo'),
    meta: {
      title: '学习视频',
      requiresAuth: true
    }
  },
  {
    path: '/offlinelearning',
    name: 'OfflineLearning',
    component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/OfflineLearning'),
    meta: {
      title: '线下学习',
      requiresAuth: true
    }
  },
  {
    path: '/activitydetails',
    name: 'ActivityDetails',
    component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/ActivityDetails'),
    meta: {
      title: '活动详情',
      requiresAuth: true
    }
  },
  {
    path: '/registeredlist',
    name: 'RegisteredList',
    component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/RegisteredList'),
    meta: {
      title: '已报名列表',
      requiresAuth: true
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
  },
  {
    path: '/projectdetail',
    name: 'ProjectDetail',
    component: () => import(/* webpackChunkName: "HomeVillage" */ './views/assistance/homeVillage/ProjectDetail'),
    meta: {
      title: '项目详情',
      requiresAuth: false
    }
  },
  {
    path: '/feedback',
    name: 'FeedBack',
    component: () => import(/* webpackChunkName: "HomeVillage" */ './views/assistance/homeVillage/FeedBack'),
    meta: {
      title: '工作反馈',
      requiresAuth: false
    }
  },
  {
    path: '/plantwarning',
    name: 'PlantWarning',
    component: () => import(/* webpackChunkName: "HomeVillage" */ './views/assistance/homeVillage/PlantWarning'),
    meta: {
      title: '种植预警',
      requiresAuth: false
    }
  },
  {
    path: '/warningdetail',
    name: 'WarningDetail',
    component: () => import(/* webpackChunkName: "HomeVillage" */ './views/assistance/homeVillage/WarningDetail'),
    meta: {
      title: '预警详情',
      requiresAuth: false
    }
  },
  {
    path: '/adminproductman',
    name: 'ProductManagement',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProductManagement'),
    meta: {
      title: '生产管理',
      requiresAuth: false
    }
  },
  {
    path: '/newproject',
    name: 'NewProject',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/NewProject'),
    meta: {
      title: '创建项目',
      requiresAuth: false
    }
  },
  {
    path: '/productplan',
    name: 'ProductPlan',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProductPlan'),
    meta: {
      title: '生产计划',
      requiresAuth: false
    }
  },
  {
    path: '/createprocess',
    name: 'CreateProcess',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/CreateProcess'),
    meta: {
      title: '流程创建',
      requiresAuth: false
    }
  },
  {
    path: '/processdetail',
    name: 'ProcessDetail',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProcessDetail'),
    meta: {
      title: '任务',
      requiresAuth: false
    }
  },
  {
    path: '/memberman',
    name: 'MemberMan',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/MemberMan'),
    meta: {
      title: '人员管理',
      requiresAuth: false
    }
  },
  {
    path: '/projectdetail2',
    name: 'ProjectDetail2',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProjectDetail2'),
    meta: {
      title: '项目详情',
      requiresAuth: false
    }
  },
  {
    path: '/labour',
    name: 'Labour',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/Labour'),
    meta: {
      title: '劳工招募',
      requiresAuth: false
    }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/Tools'),
    meta: {
      title: '农资管理',
      requiresAuth: false
    }
  },
  {
    path: '/userproductman',
    name: 'ProductMan',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/user/ProductMan'),
    meta: {
      title: '生产管理',
      requiresAuth: false
    }
  },
  {
    path: '/projectdetail3',
    name: 'ProjectDetail3',
    component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/user/ProjectDetail3'),
    meta: {
      title: '项目详情',
      requiresAuth: false
    }
  },
  {
    path: '/industry',
    name: 'Industry',
    component: () => import(/* webpackChunkName: "Industry" */ './views/assistance/industry/Industry'),
    meta: {
      title: '特色产业',
      requiresAuth: false
    }
  },
  {
    path: '/myinfo',
    name: 'MyInfo',
    component: () => import(/* webpackChunkName: "MyInfo" */ './views/center/MyInfo.vue'),
    meta: {
      title: '个人中心',
      requiresAuth: false
    }
  }, {
    path: '/onlinediscuss',
    name: 'onlinediscuss',
    component: () => import(/* webpackChunkName: "onlineDiscuss" */ './views/center/onlineDiscuss.vue'),
    meta: {
      title: '线上交流',
      requiresAuth: false
    }
  }, {
    path: '/points',
    name: 'points',
    component: () => import(/* webpackChunkName: "points" */ './views/center/points.vue'),
    meta: {
      title: '积分详情',
      requiresAuth: false
    }
  }
  ]
})
