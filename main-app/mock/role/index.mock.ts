import Mock from 'mockjs'
import { SUCCESS_CODE } from '@/constants'
import { toAnyString } from '@/utils'

const timeout = 1000

const adminList = [
  {
    path: '/system',
    component: '#',
    redirect: '/system/user',
    name: 'Authorization',
    meta: {
      title: 'router.authorization',
      icon: 'vi-eos-icons:role-binding',
      alwaysShow: true
    },
    children: [
      {
        path: 'department',
        component: 'views/Authorization/Department/Department',
        name: 'Department',
        meta: {
          title: 'router.department'
        }
      },
      {
        path: 'user',
        component: 'views/Authorization/User/User',
        name: 'User',
        meta: {
          title: 'router.user'
        }
      },
      {
        path: 'menu',
        component: 'views/Authorization/Menu/Menu',
        name: 'Menu',
        meta: {
          title: 'router.menuManagement'
        }
      },
      {
        path: 'role',
        component: 'views/Authorization/Role/Role',
        name: 'Role',
        meta: {
          title: 'router.role'
        }
      }
    ]
  }
]

const testList: string[] = [
  '/dashboard',
  '/dashboard/analysis',
  '/dashboard/workplace',
  'external-link',
  'https://element-plus-admin-doc.cn/',
  '/guide',
  '/guide/index',
  '/components',
  '/components/form',
  '/components/form/default-form',
  '/components/form/use-form',
  '/components/form/ref-form',
  '/components/table',
  '/components/table/default-table',
  '/components/table/use-table',
  '/components/table/tree-table',
  '/components/table/table-image-preview',
  '/components/table/table-video-preview',
  '/components/table/ref-table',
  '/components/table/card-table',
  '/components/editor-demo',
  '/components/editor-demo/editor',
  '/components/editor-demo/json-editor',
  '/components/editor-demo/code-editor',
  '/components/search',
  '/components/descriptions',
  '/components/image-viewer',
  '/components/dialog',
  '/components/icon',
  '/components/iconPicker',
  '/components/echart',
  '/components/count-to',
  '/components/qrcode',
  '/components/highlight',
  '/components/infotip',
  '/components/input-password',
  '/components/waterfall',
  '/components/image-cropping',
  '/components/video-player',
  '/components/avatars',
  '/components/i-agree',
  'function',
  '/function/multiple-tabs',
  '/function/multiple-tabs-demo/:id',
  '/function/request',
  '/function/test',
  '/hooks',
  '/hooks/useWatermark',
  '/hooks/useTagsView',
  '/hooks/useValidator',
  '/hooks/useCrudSchemas',
  '/hooks/useClipboard',
  '/hooks/useNetwork',
  '/level',
  '/level/menu1',
  '/level/menu1/menu1-1',
  '/level/menu1/menu1-1/menu1-1-1',
  '/level/menu1/menu1-2',
  '/level/menu2',
  '/example',
  '/example/example-dialog',
  '/example/example-page',
  '/example/example-add',
  '/example/example-edit',
  '/example/example-detail',
  '/authorization',
  '/authorization/department',
  '/authorization/user',
  '/authorization/role',
  '/authorization/menu',
  '/error',
  '/error/404-demo',
  '/error/403-demo',
  '/error/500-demo'
]

const List: any[] = []

const roleNames = ['超级管理员', '管理员', '普通用户', '游客']
const menus = [
  [
    {
      path: '/dashboard',
      component: '#',
      redirect: '/dashboard/analysis',
      name: 'Dashboard',
      status: Mock.Random.integer(0, 1),
      id: 1,
      meta: {
        title: '首页',
        icon: 'vi-ant-design:dashboard-filled',
        alwaysShow: true
      },
      children: [
        {
          path: 'analysis',
          component: 'views/Dashboard/Analysis',
          name: 'Analysis',
          status: Mock.Random.integer(0, 1),
          id: 2,
          meta: {
            title: '分析页',
            noCache: true
          }
        },
        {
          path: 'workplace',
          component: 'views/Dashboard/Workplace',
          name: 'Workplace',
          status: Mock.Random.integer(0, 1),
          id: 3,
          meta: {
            title: '工作台',
            noCache: true
          }
        }
      ]
    },
    {
      path: '/external-link',
      component: '#',
      meta: {
        title: '文档',
        icon: 'vi-clarity:document-solid'
      },
      name: 'ExternalLink',
      status: Mock.Random.integer(0, 1),
      id: 4,
      children: [
        {
          path: 'https://element-plus-admin-doc.cn/',
          name: 'DocumentLink',
          status: Mock.Random.integer(0, 1),
          id: 5,
          meta: {
            title: '文档'
          }
        }
      ]
    },
    {
      path: '/level',
      component: '#',
      redirect: '/level/menu1/menu1-1/menu1-1-1',
      name: 'Level',
      status: Mock.Random.integer(0, 1),
      id: 6,
      meta: {
        title: '菜单',
        icon: 'vi-carbon:skill-level-advanced'
      },
      children: [
        {
          path: 'menu1',
          name: 'Menu1',
          component: '##',
          status: Mock.Random.integer(0, 1),
          id: 7,
          redirect: '/level/menu1/menu1-1/menu1-1-1',
          meta: {
            title: '菜单1'
          },
          children: [
            {
              path: 'menu1-1',
              name: 'Menu11',
              component: '##',
              status: Mock.Random.integer(0, 1),
              id: 8,
              redirect: '/level/menu1/menu1-1/menu1-1-1',
              meta: {
                title: '菜单1-1',
                alwaysShow: true
              },
              children: [
                {
                  path: 'menu1-1-1',
                  name: 'Menu111',
                  component: 'views/Level/Menu111',
                  status: Mock.Random.integer(0, 1),
                  id: 9,
                  permission: ['edit', 'add', 'delete'],
                  meta: {
                    title: '菜单1-1-1',
                    permission: ['edit', 'add', 'delete']
                  }
                }
              ]
            },
            {
              path: 'menu1-2',
              name: 'Menu12',
              component: 'views/Level/Menu12',
              status: Mock.Random.integer(0, 1),
              id: 10,
              permission: ['edit', 'add', 'delete'],
              meta: {
                title: '菜单1-2',
                permission: ['edit', 'add', 'delete']
              }
            }
          ]
        },
        {
          path: 'menu2',
          name: 'Menu2Demo',
          component: 'views/Level/Menu2',
          status: Mock.Random.integer(0, 1),
          id: 11,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '菜单2',
            permission: ['edit', 'add', 'delete']
          }
        }
      ]
    },
    {
      path: '/example',
      component: '#',
      redirect: '/example/example-dialog',
      name: 'Example',
      status: Mock.Random.integer(0, 1),
      id: 12,
      meta: {
        title: '综合示例',
        icon: 'vi-ep:management',
        alwaysShow: true
      },
      children: [
        {
          path: 'example-dialog',
          component: 'views/Example/Dialog/ExampleDialog',
          name: 'ExampleDialog',
          status: Mock.Random.integer(0, 1),
          id: 13,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '综合示例-弹窗',
            permission: ['edit', 'add', 'delete']
          }
        },
        {
          path: 'example-page',
          component: 'views/Example/Page/ExamplePage',
          name: 'ExamplePage',
          status: Mock.Random.integer(0, 1),
          id: 14,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '综合示例-页面',
            permission: ['edit', 'add', 'delete']
          }
        },
        {
          path: 'example-add',
          component: 'views/Example/Page/ExampleAdd',
          name: 'ExampleAdd',
          status: Mock.Random.integer(0, 1),
          id: 15,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '综合示例-新增',
            noTagsView: true,
            noCache: true,
            hidden: true,
            showMainRoute: true,
            activeMenu: '/example/example-page',
            permission: ['edit', 'add', 'delete']
          }
        },
        {
          path: 'example-edit',
          component: 'views/Example/Page/ExampleEdit',
          name: 'ExampleEdit',
          status: Mock.Random.integer(0, 1),
          id: 16,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '综合示例-编辑',
            noTagsView: true,
            noCache: true,
            hidden: true,
            showMainRoute: true,
            activeMenu: '/example/example-page',
            permission: ['edit', 'add', 'delete']
          }
        },
        {
          path: 'example-detail',
          component: 'views/Example/Page/ExampleDetail',
          name: 'ExampleDetail',
          status: Mock.Random.integer(0, 1),
          id: 17,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '综合示例-详情',
            noTagsView: true,
            noCache: true,
            hidden: true,
            showMainRoute: true,
            activeMenu: '/example/example-page',
            permission: ['edit', 'add', 'delete']
          }
        }
      ]
    }
  ],
  [
    {
      path: '/dashboard',
      component: '#',
      redirect: '/dashboard/analysis',
      name: 'Dashboard',
      status: Mock.Random.integer(0, 1),
      id: 1,
      meta: {
        title: '首页',
        icon: 'vi-ant-design:dashboard-filled',
        alwaysShow: true
      },
      children: [
        {
          path: 'analysis',
          component: 'views/Dashboard/Analysis',
          name: 'Analysis',
          status: Mock.Random.integer(0, 1),
          id: 2,
          meta: {
            title: '分析页',
            noCache: true
          }
        },
        {
          path: 'workplace',
          component: 'views/Dashboard/Workplace',
          name: 'Workplace',
          status: Mock.Random.integer(0, 1),
          id: 3,
          meta: {
            title: '工作台',
            noCache: true
          }
        }
      ]
    }
  ],
  [
    {
      path: '/external-link',
      component: '#',
      meta: {
        title: '文档',
        icon: 'vi-clarity:document-solid'
      },
      name: 'ExternalLink',
      status: Mock.Random.integer(0, 1),
      id: 4,
      children: [
        {
          path: 'https://element-plus-admin-doc.cn/',
          name: 'DocumentLink',
          status: Mock.Random.integer(0, 1),
          id: 5,
          meta: {
            title: '文档'
          }
        }
      ]
    },
    {
      path: '/level',
      component: '#',
      redirect: '/level/menu1/menu1-1/menu1-1-1',
      name: 'Level',
      status: Mock.Random.integer(0, 1),
      id: 6,
      meta: {
        title: '菜单',
        icon: 'vi-carbon:skill-level-advanced'
      },
      children: [
        {
          path: 'menu1',
          name: 'Menu1',
          component: '##',
          status: Mock.Random.integer(0, 1),
          id: 7,
          redirect: '/level/menu1/menu1-1/menu1-1-1',
          meta: {
            title: '菜单1'
          },
          children: [
            {
              path: 'menu1-1',
              name: 'Menu11',
              component: '##',
              status: Mock.Random.integer(0, 1),
              id: 8,
              redirect: '/level/menu1/menu1-1/menu1-1-1',
              meta: {
                title: '菜单1-1',
                alwaysShow: true
              },
              children: [
                {
                  path: 'menu1-1-1',
                  name: 'Menu111',
                  component: 'views/Level/Menu111',
                  status: Mock.Random.integer(0, 1),
                  id: 9,
                  permission: ['edit', 'add', 'delete'],
                  meta: {
                    title: '菜单1-1-1',
                    permission: ['edit', 'add', 'delete']
                  }
                }
              ]
            },
            {
              path: 'menu1-2',
              name: 'Menu12',
              component: 'views/Level/Menu12',
              status: Mock.Random.integer(0, 1),
              id: 10,
              permission: ['edit', 'add', 'delete'],
              meta: {
                title: '菜单1-2',
                permission: ['edit', 'add', 'delete']
              }
            }
          ]
        },
        {
          path: 'menu2',
          name: 'Menu2Demo',
          component: 'views/Level/Menu2',
          status: Mock.Random.integer(0, 1),
          id: 11,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '菜单2',
            permission: ['edit', 'add', 'delete']
          }
        }
      ]
    }
  ],
  [
    {
      path: '/example',
      component: '#',
      redirect: '/example/example-dialog',
      name: 'Example',
      status: Mock.Random.integer(0, 1),
      id: 12,
      meta: {
        title: '综合示例',
        icon: 'vi-ep:management',
        alwaysShow: true
      },
      children: [
        {
          path: 'example-detail',
          component: 'views/Example/Page/ExampleDetail',
          name: 'ExampleDetail',
          status: Mock.Random.integer(0, 1),
          id: 17,
          permission: ['edit', 'add', 'delete'],
          meta: {
            title: '综合示例-详情',
            noTagsView: true,
            noCache: true,
            hidden: true,
            showMainRoute: true,
            activeMenu: '/example/example-page',
            permission: ['edit', 'add', 'delete']
          }
        }
      ]
    }
  ]
]

for (let i = 0; i < 4; i++) {
  List.push(
    Mock.mock({
      id: toAnyString(),
      // timestamp: +Mock.Random.date('T'),
      roleName: roleNames[i],
      role: '@first',
      status: Mock.Random.integer(0, 1),
      createTime: '@datetime',
      remark: '@cword(10, 15)',
      menu: menus[i]
    })
  )
}

export default [
  // 列表接口
  {
    url: '/mock/role/list',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: SUCCESS_CODE,
        data: adminList
      }
    }
  },
  {
    url: '/mock/role/table',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: SUCCESS_CODE,
        data: {
          list: List,
          total: 4
        }
      }
    }
  },
  // 列表接口
  {
    url: '/mock/role/list2',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: SUCCESS_CODE,
        data: testList
      }
    }
  },
  {
    url: '/mock/role/table',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: SUCCESS_CODE,
        data: {
          list: List,
          total: 4
        }
      }
    }
  }
]
