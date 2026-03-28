<template>
  <div class="p-6 bg-green-50 min-h-screen">
    <!-- 标题 -->
    <h1 class="text-2xl font-bold mb-6">数智助农平台</h1>

    <!-- 项目简介 -->
    <div class="bg-white p-5 rounded-2xl shadow mb-6">
      <h2 class="text-lg font-semibold mb-2">项目简介</h2>
      <p class="text-gray-600 leading-relaxed">
        基于物联网与人工智能的农业数据分析平台，实现农作物环境监测、智能分析与管理。
      </p>
    </div>

    <!-- 功能模块（升级版） -->
    <div class="grid grid-cols-3 gap-6 mb-6">

      <!-- 模块1 -->
      <div
        @click="router.push('/leaf')"
        class="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center 
        cursor-pointer transition-all duration-300
        hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:bg-green-50"
      >
        <span class="text-4xl mb-3">🌿</span>
        <h3 class="text-lg font-bold text-gray-700">叶片状态诊断</h3>
        <p class="text-sm text-gray-500 mt-1 text-center">
          智能识别叶片健康状态
        </p>
      </div>

      <!-- 模块2 -->
      <div
        @click="router.push('/soil')"
        class="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center 
        cursor-pointer transition-all duration-300
        hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:bg-yellow-50"
      >
        <span class="text-4xl mb-3">🌱</span>
        <h3 class="text-lg font-bold text-gray-700">土壤检测</h3>
        <p class="text-sm text-gray-500 mt-1 text-center">
          实时监测土壤环境数据
        </p>
      </div>

      <!-- 模块3 -->
      <div
        @click="router.push('/assistant')"
        class="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center 
        cursor-pointer transition-all duration-300
        hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50"
      >
        <span class="text-4xl mb-3">🤖</span>
        <h3 class="text-lg font-bold text-gray-700">作物种植助手</h3>
        <p class="text-sm text-gray-500 mt-1 text-center">
          提供智能种植决策建议
        </p>
      </div>

    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-2 gap-6">

      <!-- 图1 -->
      <div class="bg-white p-5 rounded-2xl shadow">
        <div class="h-44 flex items-center justify-center">
          <img :src="chartImg" class="w-full h-full object-contain rounded-lg" />
        </div>
        <p class="text-sm text-gray-500 mt-3 text-center">
          温湿度变化图：展示农田环境变化趋势
        </p>
      </div>

      <!-- 图2 -->
      <div class="bg-white p-5 rounded-2xl shadow">
        <div class="h-44 flex items-center justify-center">
          <img :src="chartImg2" class="w-full h-full object-contain rounded-lg" />
        </div>
        <p class="text-sm text-gray-500 mt-3 text-center">
          作物生长趋势图：分析作物生长状态变化
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import chartImg from "@/assets/images/p1.png";
import chartImg2 from "@/assets/images/p2.png";
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
</style>