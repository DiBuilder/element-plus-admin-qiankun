import { registerMicroApps, start, RegistrableApp, initGlobalState } from 'qiankun'
import { ElMessage as message } from 'element-plus'

// 初始化全局状态
export const globalState = initGlobalState({
  user: null,
  theme: 'light',
  language: 'zh-CN'
})

// 监听全局状态变更
globalState.onGlobalStateChange((state, prev) => {
  console.log('全局状态变更：', state, prev)
})

// 微应用配置
// const microApps: RegistrableApp<any>[] = [
//   {
//     name: 'systemApp',
//     entry: '//localhost:4001',
//     container: '#subapp-viewport',
//     activeRule: '/system',
//     props: {
//       globalState,
//       mainStore: (window as any).__MAIN_STORE__
//     }
//   },
//   {
//     name: 'exampleApp',
//     entry: '//localhost:4002',
//     container: '#subapp-viewport',
//     activeRule: '/example',
//     props: {
//       globalState,
//       mainStore: (window as any).__MAIN_STORE__
//     }
//   }
// ]

// 全局生命周期钩子
const lifeCycles = {
  beforeLoad: async (app: any) => {
    console.log('before load app', app.name)
    try {
      message.info(`${app.name} 加载中...`)
      return Promise.resolve()
    } catch (error) {
      message.error(`${app.name} 加载失败`)
      return Promise.reject(error)
    }
  },
  beforeMount: async (app: any) => {
    console.log('before mount app', app.name)
    try {
      return Promise.resolve()
    } catch (error) {
      message.error(`${app.name} 挂载前出错`)
      return Promise.reject(error)
    }
  },
  afterMount: async (app: any) => {
    console.log('after mount app', app.name)
    try {
      message.success(`${app.name} 已加载完成`)
      return Promise.resolve()
    } catch (error) {
      message.error(`${app.name} 挂载后出错`)
      return Promise.reject(error)
    }
  },
  beforeUnmount: async (app: any) => {
    console.log('before unmount app', app.name)
    try {
      return Promise.resolve()
    } catch (error) {
      message.error(`${app.name} 卸载前出错`)
      return Promise.reject(error)
    }
  },
  afterUnmount: async (app: any) => {
    console.log('after unmount app', app.name)
    try {
      message.success(`${app.name} 已卸载完成`)
      return Promise.resolve()
    } catch (error) {
      message.error(`${app.name} 卸载后出错`)
      return Promise.reject(error)
    }
  }
}

// 注册微应用
export const registerApps = async () => {
  const response = await fetch(`/${import.meta.env.VITE_USE_SUB_CONFIG_FILE_NAME}.json`)
  const file = await response.json()
  console.log(file)
  // 获取微应用配置
  const microApps: RegistrableApp<any>[] = file.map((item: any) => {
    return {
      name: item.name,
      entry: item.entry,
      container: '#subapp-viewport',
      activeRule: item.activeRule,
      props: {
        globalState,
        mainStore: (window as any).__MAIN_STORE__,
        cssIsolation: true // 启用样式隔离
      }
    }
  })
  registerMicroApps(microApps, lifeCycles)
}

// 启动 qiankun
export const startApps = (): void => {
  start()
}
