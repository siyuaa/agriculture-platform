<script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import SimpleBar from 'simplebar-vue'
import { notifications } from '../../../_mockApis/headerData';
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="relative group/menu px-4">
    <!-- 下拉触发 -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <div class="relative">
          <span
            class="relative after:absolute after:w-10 after:h-10 after:rounded-full hover:text-primary after:-top-1/2 hover:after:bg-lightprimary text-link dark:text-darklink rounded-full flex justify-center items-center cursor-pointer"
          >
            <Icon icon="tabler:bell-ringing" height="20" />
          </span>
          <span class="absolute -top-[5px] -end-[6px] h-2 w-2 bg-primary rounded-full"></span>
        </div>
      </DropdownMenuTrigger>

      <!-- 下拉内容 -->
      <DropdownMenuContent class="w-screen sm:w-[300px] py-6 rounded-md shadow-lg z-50">
        
        <!-- 标题 -->
        <div class="flex items-center px-6 justify-between">
          <h3 class="text-lg font-semibold">通知</h3>
        </div>

        <!-- 列表 -->
        <SimpleBar class="max-h-80 mt-3">
          <div>
            <div
              v-for="(item, index) in notifications"
              :key="index"
              class="px-6 py-3 flex items-center hover:bg-lightprimary cursor-pointer"
            >
              <div>
                <h5 class="mb-1 text-sm">
                  {{ item.title }}
                </h5>
                <span class="text-xs text-gray-500">
                  {{ item.subtitle }}
                </span>
              </div>
            </div>
          </div>
        </SimpleBar>

      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>