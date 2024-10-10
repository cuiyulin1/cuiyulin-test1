<template>
    <!-- <div>代码仓库</div> -->
      <div class="px-[0]">
        <Menu
        v-model:selectedKeys="selectedKeys1"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <MenuItem class="text-[#000000]" key="1">最近访问</MenuItem>
        <MenuItem key="2">全部仓库</MenuItem>
        <MenuItem key="3">开源仓库</MenuItem>
      </Menu>
      </div>
      
</template>

<script setup>
import { LayoutHeader,Menu,MenuItem } from 'ant-design-vue';
</script>