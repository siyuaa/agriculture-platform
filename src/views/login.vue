<template>
  <div class="h-screen flex items-center justify-center bg-green-50">
    <div class="bg-white p-8 rounded-2xl shadow w-80">
      <h2 class="text-xl font-bold mb-6 text-center">用户登录</h2>

      <input
        v-model="username"
        placeholder="用户名"
        class="w-full mb-4 p-2 border rounded"
      />

      <input
        v-model="password"
        type="password"
        placeholder="密码"
        class="w-full mb-6 p-2 border rounded"
      />

      <button
        @click="handleLogin"
        class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        登录
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = () => {
  if (username.value === "admin" && password.value === "123456") {
    localStorage.setItem("token", "123"); // 模拟登录
    router.push("/");
  } else {
    alert("账号或密码错误");
  }
};
</script>