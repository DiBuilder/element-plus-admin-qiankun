<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { Footer } from '@/components/Footer'
import { computed, onMounted } from 'vue'
import { start } from 'qiankun'

const appStore = useAppStore()

const footer = computed(() => appStore.getFooter)

onMounted(() => {
  // 启动 qiankun
  start({
    sandbox: {
      experimentalStyleIsolation: true, // 开启样式隔离
      strictStyleIsolation: false // 禁用严格样式隔离，避免一些样式问题
    },
    prefetch: 'all' // 预加载所有微应用
  })
})
</script>

<template>
  <div>
    <section
      :class="[
        'box-border p-[var(--app-content-padding)] w-full bg-[var(--app-content-bg-color)] dark:bg-[var(--el-bg-color)]',
        {
          '!min-h-[calc(100vh-var(--top-tool-height)-var(--tags-view-height)-var(--app-footer-height))] pb-0':
            footer
        }
      ]"
    >
      <div id="subapp-viewport" class="subapp-container"></div>
    </section>
    <Footer v-if="footer" />
  </div>
</template>

function mounted() {
  throw new Error('Function not implemented.')
}
