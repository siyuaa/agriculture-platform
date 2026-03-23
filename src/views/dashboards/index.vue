<template>
  <div class="p-6 bg-green-50 min-h-screen">
    <!-- 标题 -->
    <h1 class="text-2xl font-bold mb-6">数智助农平台</h1>

    <!-- 项目简介 -->
    <div class="bg-white p-4 rounded-xl shadow mb-6">
      <h2 class="text-lg font-semibold mb-2">项目简介</h2>
      <p class="text-gray-600">
        基于物联网与人工智能的农业数据分析平台，实现农作物环境监测、智能分析与管理。
      </p>
    </div>

    <!-- 功能模块（只留框架） -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-white h-32 rounded-xl shadow flex items-center justify-center text-gray-400">
        模块一
      </div>
      <div class="bg-white h-32 rounded-xl shadow flex items-center justify-center text-gray-400">
        模块二
      </div>
      <div class="bg-white h-32 rounded-xl shadow flex items-center justify-center text-gray-400">
        模块三
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-2 gap-4">
      <!-- 图1 -->
      <div class="bg-white p-4 rounded-xl shadow">
        <div class="h-40 flex items-center justify-center text-gray-300">
          （这里放图表）
        </div>
        <p class="text-sm text-gray-500 mt-2">
          温湿度变化图：用于展示农田环境温湿度的实时变化情况。
        </p>
      </div>

      <!-- 图2 -->
      <div class="bg-white p-4 rounded-xl shadow">
        <div class="h-40 flex items-center justify-center text-gray-300">
          （这里放图表）
        </div>
        <p class="text-sm text-gray-500 mt-2">
          作物生长趋势图：用于分析作物生长状态变化。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 暂时不用写逻辑
</script>

<style scoped>
</style>