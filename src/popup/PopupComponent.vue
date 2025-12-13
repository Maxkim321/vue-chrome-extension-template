<template>
  <div class="popup-component">
    <!--打开侧边栏 -->
    <button class="open-sidepanel-btn" @click="handleOpenSidePanel()">打开侧边栏</button>
    <!-- 打开选项页 -->
    <button class="open-options-btn" @click="handleOpenOptions()">打开选项页</button>
  </div>
</template>

<script setup>
import { openSidePanel, openOptions } from '@/utils/base'

defineOptions({
  name: 'PopupComponent',
})

// 打开侧边栏
const handleOpenSidePanel = () => {
  openSidePanel()
}

// 打开选项页
const handleOpenOptions = () => {
  openOptions()
}
</script>
