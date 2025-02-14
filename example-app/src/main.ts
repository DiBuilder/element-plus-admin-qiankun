import 'vue/jsx'
import './public-path'

// 引入windi css
import '@/plugins/unocss'

// 导入全局的svg图标
import '@/plugins/svgIcon'

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'

// 引入状态管理
import { setupStore } from '@/store'

// 全局组件
import { setupGlobCom } from '@/components'

// 引入element-plus
import { setupElementPlus } from '@/plugins/elementPlus'

// 引入全局样式
import '@/styles/index.less'

// 引入动画
import '@/plugins/animate.css'

// 路由
import { setupRouter } from './router'

// 权限
import { setupPermission } from './directives'

import { createApp } from 'vue'

import App from './App.vue'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import './permission'

let app: any
let router: any

// 创建实例
const setupAll = async () => {
  app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  setupGlobCom(app)

  // 挂载路由
  router = setupRouter(app)

  // 权限
  setupPermission(app)

  // element-plus
  setupElementPlus(app)

  app.mount('#sub-app')

  return app
}

// qiankun生命周期函数
renderWithQiankun({
  async bootstrap() {
    console.log('system-app bootstraped')
  },
  async mount(props: any) {
    console.log('system-app mount', props)
    await setupAll()
  },
  async unmount() {
    console.log('system-app unmount')
    app.unmount()
    app = null
    router = null
  },
  // 添加 update 生命周期函数
  async update(props: any) {
    console.log('system-app update', props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('非qiankun环境！')
  setupAll()
}
