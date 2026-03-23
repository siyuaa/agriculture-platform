const MainRoutes = [
  {
    path: '/',
    component: () => import('../layouts/full/FullLayout.vue'),
    children: [
      // 首页
      {
        path: '',
        name: '首页',
        component: () => import('../views/dashboards/index.vue'),
        meta: {
          title: '首页',
          icon: 'mdi-home'
        }
      },

      // 模式
      {
        path: '/mode',
        name: '模式',
        component: () => import('../views/sample-page/index.vue'),
        meta: {
          title: '模式',
          icon: 'mdi-cog'
        }
      },

      // 开关
      {
        path: '/switch',
        name: '开关',
        component: () => import('../views/sample-page/index.vue'),
        meta: {
          title: '开关',
          icon: 'mdi-toggle-switch'
        }
      },

      // AI检测助手
      {
        path: '/ai',
        name: 'AI检测助手',
        component: () => import('../views/sample-page/index.vue'),
        meta: {
          title: 'AI检测助手',
          icon: 'mdi-robot'
        }
      }
    ]
  }
]

export default MainRoutes