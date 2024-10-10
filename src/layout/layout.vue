<template>
    <Layout class="!h-[100vh]">
      <LayoutSider width="60" class="!bg-[#f8f9fc]" style="border-right: 1px solid #c9ceda;">
        <Menu class="!text-[#] !text-[12px]" v-model:selectedKeys="selectedKeys" mode="inline">
        
          <MenuItem class="flex flex-col !p-[6px] !h-[60px]"  key="1">
            <Icon icon="icon-park-outline:workbench"  style="color: #4c5155;" 
            class="w-[20px] h-[20px] ml-[6px] icon-hover"/>
          <span class="nav-text">工作台</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="2"> 
            <Icon icon="lsicon:folder-files-outline"  style="color: #4c5155" 
            class="w-[20px] h-[20px] ml-[2px] icon-hover"/>
          <span class="nav-text">项目</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="3">
            <Icon icon="simple-icons:lightning"  style="color: #4c5155"  class="w-[20px] h-[20px] ml-[2px] icon-hover"/>
          <span class="nav-text pl-[5px]">AI</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="4">
            <Icon icon="uiw:file-text"  style="color: #4c5155"  class="w-[20px] h-[20px] ml-[2px] icon-hover"/>
          <span class="nav-text">事项</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="5">
            <Icon icon="solar:code-square-linear"  style="color: #4c5155"  class="w-[20px] h-[20px] ml-[2px] icon-hover"/>
          <span class="nav-text">代码</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="6">
            <Icon icon="mage:box-3d"  style="color: #4c5155" class="w-[20px] h-[20px] ml-[2px] icon-hover"/>
          <span class="nav-text">制品</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="7">
            <Icon icon="ic:baseline-insights"  style="color: #4c5155" class="w-[20px] h-[20px] ml-[2px]  icon-hover"/>
          <span class="nav-text">洞察</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="8">
            <Icon icon="material-symbols-light:menu-book-outline"  style="color: #4c5155" class="w-[20px] h-[20px] ml-[2px] icon-hover"/>
          <span class="nav-text">知识</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="9">
            <Icon icon="mingcute:ad-circle-line"  style="color: #4c5155" class="w-[20px] h-[20px] ml-[6px] icon-hover"/>
          <span class="nav-text">自动化</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="10">
            <Icon icon="weui:me-outlined"  style="color: #4c5155" class="w-[20px] h-[20px] ml-[2px] icon-hover"/>
          <span class="nav-text">个人</span>
        </MenuItem>
      </Menu>
      </LayoutSider>
      
      <Layout>
        <LayoutHeader class="!h-[60px] !bg-white" style="border-bottom: 1px solid #c9ceda;">
        </LayoutHeader>
        <Layout>
          <LayoutContent class="!box-border">
            <!-- <div></div> -->
            <RouterView></RouterView>
          </LayoutContent>
        </Layout>
      </Layout>
    </Layout>
  </template>
  <script setup>
import { Layout,LayoutContent,LayoutHeader,LayoutSider,Menu,MenuItem } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
const router = useRouter()

// const
  </script>

  <style scoped>
  .icon-hover:hover{
    color: blue;
  }
</style>
