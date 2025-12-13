<template>
  <div class="popup-component">
    <!--打开侧边栏 -->
    <button class="open-sidepanel-btn" @click="openSidePanel">打开侧边栏</button>
  </div>
</template>

<script setup>

defineOptions({
  name: 'PopupComponent',
})

// 打开侧边栏
const openSidePanel = () => {

}
</script>

<style scoped>
.popup-component {
  width: 600px;
  height: 200px;
  font-size: 16px;
}

.open-sidepanel-btn {
  width: 100px;
  height: 40px;
  font-size: 16px;
}
</style>
