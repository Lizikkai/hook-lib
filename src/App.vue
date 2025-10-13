<template>
  <div>
    <div>是PC端吗？{{ isPC ? '是' : '不是' }}</div>
    <div>是移动端吗？{{ isMobile ? '是' : '不是' }}</div>
    <div>是否是企业微信工作环境？{{ isWxWork ? '是' : '不是' }}</div>
    <div>是否是微信工作环境？{{ isWeChat ? '是' : '不是' }}</div>
    <div>是否是浏览器环境？{{ isBroswer ? '是' : '不是' }}</div>
    <div>当前环境类型？{{ envType }}</div>
    <div>当前用户代理{{ userAgent }}</div>
  </div>
</template>

<script setup lang="ts">
    import { useDevice, usePlatformEnv } from './index'
    const { isPC, isMobile } = useDevice()
    const { isWxWork, isWeChat, isBroswer, userAgent, envType } = usePlatformEnv()
</script>