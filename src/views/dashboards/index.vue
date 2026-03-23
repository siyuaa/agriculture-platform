<template>
  <div class="p-6 space-y-6 bg-gray-100 min-h-screen">

    <!-- 标题 -->
    <h1 class="text-3xl font-bold text-gray-800">🌾 数智助农平台</h1>

    <!-- 项目简介 -->
    <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h2 class="text-xl font-semibold mb-3 text-gray-800">项目简介</h2>
      <p class="text-gray-600 leading-relaxed">
        本平台基于物联网与人工智能技术，对农作物生长环境进行实时监测与智能分析。
        通过部署温湿度、光照等传感器，实现数据自动采集与高频更新，保障数据的时效性与准确性。
        同时具备智能预警与操作建议功能，提高农业生产效率与作物品质。
      </p>
    </div>

    <!-- 核心模块 -->
    <div>
      <h2 class="text-xl font-semibold mb-4 text-gray-800">核心功能模块</h2>

      <div class="grid md:grid-cols-3 gap-6">

        <!-- 模块1 -->
        <div class="bg-white rounded-2xl shadow-md p-5 hover:scale-105 transition">
          <h3 class="text-lg font-semibold mb-3">📡 数据采集</h3>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• 温湿度监测</li>
            <li>• 光照数据采集</li>
            <li>• 气象数据整合</li>
          </ul>
        </div>

        <!-- 模块2 -->
        <div class="bg-white rounded-2xl shadow-md p-5 hover:scale-105 transition">
          <h3 class="text-lg font-semibold mb-3">🤖 智能分析</h3>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• 生长预测</li>
            <li>• 病虫害预警</li>
            <li>• 水肥调控</li>
          </ul>
        </div>

        <!-- 模块3 -->
        <div class="bg-white rounded-2xl shadow-md p-5 hover:scale-105 transition">
          <h3 class="text-lg font-semibold mb-3">📊 应用管理</h3>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• 农户平台</li>
            <li>• 后台管理</li>
            <li>• 数据展示</li>
          </ul>
        </div>

      </div>
    </div>

    <!-- 服务流程 -->
    <div class="bg-white rounded-2xl shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">服务流程</h2>

      <div class="flex flex-wrap justify-between items-center text-gray-600 text-sm md:text-base">
        <span>📡 数据采集</span>
        <span>➡️</span>
        <span>🧠 模型分析</span>
        <span>➡️</span>
        <span>🎯 精准干预</span>
        <span>➡️</span>
        <span>📈 效果反馈</span>
      </div>
    </div>

  </div>
</template>

<script setup>
</script>