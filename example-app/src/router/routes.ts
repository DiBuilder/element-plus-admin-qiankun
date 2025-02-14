import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export const Routes: AppRouteRecordRaw[] = [
  {
    path: 'example-dialog',
    component: () => import('@/views/Example/Dialog/ExampleDialog.vue'),
    name: 'ExampleDialog',
    meta: {
      title: t('router.exampleDialog')
    }
  },
  {
    path: 'example-page',
    component: () => import('@/views/Example/Page/ExamplePage.vue'),
    name: 'ExamplePage',
    meta: {
      title: t('router.examplePage')
    }
  },
  {
    path: 'example-add',
    component: () => import('@/views/Example/Page/ExampleAdd.vue'),
    name: 'ExampleAdd',
    meta: {
      title: t('router.exampleAdd'),
      noTagsView: true,
      noCache: true,
      hidden: true,
      canTo: true,
      activeMenu: '/example/example-page'
    }
  },
  {
    path: 'example-edit',
    component: () => import('@/views/Example/Page/ExampleEdit.vue'),
    name: 'ExampleEdit',
    meta: {
      title: t('router.exampleEdit'),
      noTagsView: true,
      noCache: true,
      hidden: true,
      canTo: true,
      activeMenu: '/example/example-page'
    }
  },
  {
    path: 'example-detail',
    component: () => import('@/views/Example/Page/ExampleDetail.vue'),
    name: 'ExampleDetail',
    meta: {
      title: t('router.exampleDetail'),
      noTagsView: true,
      noCache: true,
      hidden: true,
      canTo: true,
      activeMenu: '/example/example-page'
    }
  }
]
