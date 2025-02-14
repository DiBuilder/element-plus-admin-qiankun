<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { Footer } from '@/components/Footer'
import { computed } from 'vue'

const appStore = useAppStore()

const footer = computed(() => appStore.getFooter)
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
