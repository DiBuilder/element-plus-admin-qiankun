import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export const Routes: AppRouteRecordRaw[] = [
  {
    path: 'department',
    component: () => import('@/views/Authorization/Department/Department.vue'),
    name: 'Department',
    meta: {
      title: t('router.department')
    }
  },
  {
    path: 'user',
    component: () => import('@/views/Authorization/User/User.vue'),
    name: 'User',
    meta: {
      title: t('router.user')
    }
  },
  {
    path: 'menu',
    component: () => import('@/views/Authorization/Menu/Menu.vue'),
    name: 'Menu',
    meta: {
      title: t('router.menuManagement')
    }
  },
  {
    path: 'role',
    component: () => import('@/views/Authorization/Role/Role.vue'),
    name: 'Role',
    meta: {
      title: t('router.role')
    }
  }
]
