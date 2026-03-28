<script setup lang="tsx">
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
import FullLogo from '@/layouts/full/logo/Logo.vue'
import Card from '@/components/ui/card/Card.vue'

const router = useRouter()

// 表单数据
const username = ref('')
const password = ref('')
const error = ref('')

// 登录逻辑
const handleLogin = () => {
  if (!username.value || !password.value) {
    error.value = '请输入账号和密码'
    return
  }

  // 👉 模拟账号密码（你可以改）
  if (username.value === 'admin' && password.value === '123456') {
    localStorage.setItem('isLogin', 'true')
    localStorage.setItem('username', username.value)
    router.push('/') // 登录成功跳首页
  } else {
    error.value = '账号或密码错误'
  }
}
</script>



<template>
  <div class="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
    <div class="flex h-full justify-center items-center px-4">
      <Card class="md:w-[450px] w-full border-none gap-0">

        <!-- Logo -->
        <div class="flex items-center justify-center">
          <FullLogo />
        </div>

        <!-- 标题 -->
        <h2 class="text-center text-xl font-bold mt-4">用户登录</h2>

        <!-- 输入框 -->
        <div class="px-6 mt-4">
          <input
            v-model="username"
            placeholder="请输入账号"
            class="w-full border p-2 rounded mb-3"
          />
          <input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            class="w-full border p-2 rounded mb-3"
          />

          <!-- 错误提示 -->
          <p v-if="error" class="text-red-500 text-sm mb-2">
            {{ error }}
          </p>

          <!-- 登录按钮 -->
          <button
            @click="handleLogin"
            class="w-full bg-primary text-white py-2 rounded-lg hover:scale-105 transition"
          >
            登录
          </button>
        </div>

        <!-- 注册 -->
        <div class="flex gap-2 text-base mt-6 items-center justify-center">
          <p>还没有账号？</p>
          <RouterLink to="/auth/register2" class="text-primary text-sm">
            去注册
          </RouterLink>
        </div>

      </Card>
    </div>
  </div>
</template>

