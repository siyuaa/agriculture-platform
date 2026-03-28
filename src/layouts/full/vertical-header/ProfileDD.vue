<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";
import { profileDD } from "../../../_mockApis/headerData";
import SimpleBar from "simplebar-vue";
import user1 from "@/assets/images/profile/user-1.jpg";
</script>

<template>
  <div class="relative group/menu ps-4">
    <DropdownMenu>
      <!-- 头像 -->
      <DropdownMenuTrigger as-child>
        <span
          class="hover:text-primary hover:bg-lightprimary p-1 rounded-full flex justify-center items-center cursor-pointer transition">
          <img :src="user1" alt="用户" class="rounded-full w-9 h-9 object-cover" />
        </span>
      </DropdownMenuTrigger>

      <!-- 下拉菜单 -->
      <DropdownMenuContent class="w-screen sm:w-[200px] py-6 rounded-sm">

        <!-- 菜单项 -->
        <SimpleBar>
          <div>
            <RouterLink
              v-for="(item, index) in profileDD"
              :key="index"
              class="px-4 py-2 flex items-center hover:bg-lightprimary cursor-pointer"
              :to="item.url"
            >
              <Icon :icon="item.img" class="text-lg text-ld mr-2" />
              <h5 class="text-sm">{{ item.title }}</h5>
            </RouterLink>
          </div>
        </SimpleBar>

        <!-- 退出登录 -->
        <div class="pt-2 px-4">
          <Button variant="outline" class="w-full" as-child>
            <RouterLink to="/auth/login2">退出登录</RouterLink>
          </Button>
        </div>

      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>