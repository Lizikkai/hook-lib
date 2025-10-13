<template>
    <div>
        <div>是PC端吗？{{ isPC ? '是' : '不是' }}</div>
        <div>是移动端吗？{{ isMobile ? '是' : '不是' }}</div>
        <div>是否是企业微信工作环境？{{ isWxWork ? '是' : '不是' }}</div>
        <div>是否是微信工作环境？{{ isWeChat ? '是' : '不是' }}</div>
        <div>是否是浏览器环境？{{ isBroswer ? '是' : '不是' }}</div>
        <div>当前环境类型？{{ envType }}</div>
        <div>当前用户代理{{ userAgent }}</div>
        <div>{{ str }}</div>
        <div>input:{{ value }}</div>
        <input type="text" @input="handleInput" v-model="value">
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { sleep, useDevice, usePlatformEnv, useDebounce, useThrottle } from './index'
const { isPC, isMobile } = useDevice()
const { isWxWork, isWeChat, isBroswer, userAgent, envType } = usePlatformEnv()

const str = ref('hello world')
const value = ref('')

onMounted(() => {
    sleep(3000).then(() => {
        str.value = 'hello abc'
    })
})

// function handleInput(ev: Event) {
//     const target = ev.target as HTMLInputElement
//     console.log('target -->', target.value)
//     value.value = target.value
// }

const handleInput = useDebounce((e: Event) => {
    const target = e.target as HTMLInputElement
    console.log('target.value', target.value)
    value.value = target.value
}, 300)

</script>