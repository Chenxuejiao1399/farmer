import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('./components/HelloWorld'),
      meta: {
        title: '测试页面',
        requiresAuth: true
      }
    },
    /* 信息互通start */
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
        title: '农业气象/农业科技',
        requiresAuth: false
      }
    },
    {
      path: '/liveworld',
      name: 'LiveWorld',
      component: () => import(/* webpackChunkName: "Agriculture" */ './views/information/LiveWorld'),
      meta: {
        title: '生活天地',
        requiresAuth: false
      }
    },
    /* 信息互通end */
    /* 生产帮扶--培训天地start */
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
        requiresAuth: true
      }
    },
    {
      path: '/onlinelist',
      name: 'OnlineList',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/OnlineList'),
      meta: {
        title: '线上交流',
        requiresAuth: true
      }
    },
    {
      path: '/onlinechat',
      name: 'OnlineChat',
      component: () => import(/* webpackChunkName: "Training" */ './views/assistance/train/OnlineChat'),
      meta: {
        title: '线上交流',
        requiresAuth: true
      }
    },
    /* 生产帮扶--培训天地end */
    /* 生产帮扶--本村项目start */
    {
      path: '/homevillage',
      name: 'HomeVillage',
      component: () => import(/* webpackChunkName: "HomeVillage" */ './views/assistance/homeVillage/HomeVillage'),
      meta: {
        title: '本村项目',
        requiresAuth: true
      }
    },
    {
      path: '/projectdetail',
      name: 'ProjectDetail',
      component: () => import(/* webpackChunkName: "HomeVillage" */ './views/assistance/homeVillage/ProjectDetail'),
      meta: {
        title: '项目详情',
        requiresAuth: true
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
    /* 生产帮扶--本村项目end */
    /* 生产帮扶--管理员--生产管理start */
    {
      path: '/adminproductman',
      name: 'ProductManagement',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProductManagement'),
      meta: {
        title: '生产管理',
        requiresAuth: true
      }
    },
    {
      path: '/newproject',
      name: 'NewProject',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/NewProject'),
      meta: {
        title: '创建项目',
        requiresAuth: true
      }
    },
    {
      path: '/productplan',
      name: 'ProductPlan',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProductPlan'),
      meta: {
        title: '生产计划',
        requiresAuth: true
      }
    },
    {
      path: '/createprocess',
      name: 'CreateProcess',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/CreateProcess'),
      meta: {
        title: '流程创建',
        requiresAuth: true
      }
    },
    {
      path: '/processdetail',
      name: 'ProcessDetail',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProcessDetail'),
      meta: {
        title: '任务',
        requiresAuth: true
      }
    },
    {
      path: '/memberman',
      name: 'MemberMan',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/MemberMan'),
      meta: {
        title: '人员管理',
        requiresAuth: true
      }
    },
    {
      path: '/projectdetail2',
      name: 'ProjectDetail2',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/ProjectDetail2'),
      meta: {
        title: '项目详情',
        requiresAuth: true
      }
    },
    {
      path: '/labour',
      name: 'Labour',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/Labour'),
      meta: {
        title: '劳工招募',
        requiresAuth: true
      }
    },
    {
      path: '/tools',
      name: 'Tools',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/admin/Tools'),
      meta: {
        title: '农资管理',
        requiresAuth: true
      }
    },
    /* 生产帮扶--管理员--生产管理end */
    /* 生产帮扶--普通人--生产管理start */
    {
      path: '/userproductman',
      name: 'ProductMan',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/user/ProductMan'),
      meta: {
        title: '生产管理',
        requiresAuth: true
      }
    },
    {
      path: '/projectdetail3',
      name: 'ProjectDetail3',
      component: () => import(/* webpackChunkName: "ProductMan" */ './views/assistance/productMan/user/ProjectDetail3'),
      meta: {
        title: '项目详情',
        requiresAuth: true
      }
    },
    /* 生产帮扶--普通人--生产管理end */
    /* 个人中心start */
    {
      path: '/myinfo',
      name: 'MyInfo',
      component: () => import(/* webpackChunkName: "MyInfo" */ './views/center/MyInfo.vue'),
      meta: {
        title: '个人中心',
        requiresAuth: true
      }
    },
    {
      path: '/mycoop',
      name: 'MyCoop',
      component: () => import(/* webpackChunkName: "MyInfo" */ './views/center/MyCoop.vue'),
      meta: {
        title: '我的合作社',
        requiresAuth: true
      }
    },
    {
      path: '/points',
      name: 'points',
      component: () => import(/* webpackChunkName: "MyInfo" */ './views/center/points.vue'),
      meta: {
        title: '积分详情',
        requiresAuth: true
      }
    },
    {
      path: '/log',
      name: 'Log',
      component: () => import(/* webpackChunkName: "MyInfo" */ './views/center/Log.vue'),
      meta: {
        title: '日志详情',
        requiresAuth: true
      }
    },
    {
      path: '/memberlist',
      name: 'MemberList',
      component: () => import(/* webpackChunkName: "MyInfo" */ './views/center/MemberList.vue'),
      meta: {
        title: '社员列表',
        requiresAuth: true
      }
    },
    {
      path: '/memberworld',
      name: 'MemberWorld',
      component: () => import(/* webpackChunkName: "MyInfo" */ './views/center/MemberWorld.vue'),
      meta: {
        title: '我的合作社',
        requiresAuth: true
      }
    },
    /* 个人中心end */
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/register.vue'),
      meta: {
        title: '注册',
        requiresAuth: false
      }
    }
  ]
})
