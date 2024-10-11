<template>
  <Layout class="!h-[100vh]">
    <LayoutSider
      width="60"
      class="!bg-[#f8f9fc]"
      style="border-right: 1px solid #c9ceda"
    >
      <Menu
        class="!text-[#] !text-[12px]"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
      >
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="1">
          <Icon
            icon="icon-park-outline:workbench"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[6px] icon-hover"
          />
          <span class="nav-text">工作台</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="2">
          <Icon
            icon="lsicon:folder-files-outline"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text">项目</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="3">
          <Icon
            icon="simple-icons:lightning"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text pl-[5px]">AI</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="4">
          <Icon
            icon="uiw:file-text"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text">事项</span>
        </MenuItem>
        <MenuItem
          @click="repo"
          class="flex flex-col !p-[6px] !h-[60px]"
          key="5"
        >
          <Icon
            icon="solar:code-square-linear"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text">代码</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="6">
          <Icon
            icon="mage:box-3d"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text">制品</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="7">
          <Icon
            icon="ic:baseline-insights"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text">洞察</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="8">
          <Icon
            icon="material-symbols-light:menu-book-outline"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text">知识</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="9">
          <Icon
            icon="mingcute:ad-circle-line"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[6px] icon-hover"
          />
          <span class="nav-text">自动化</span>
        </MenuItem>
        <MenuItem class="flex flex-col !p-[6px] !h-[60px]" key="10">
          <Icon
            icon="weui:me-outlined"
            style="color: #4c5155"
            class="w-[20px] h-[20px] ml-[2px] icon-hover"
          />
          <span class="nav-text">个人</span>
        </MenuItem>
      </Menu>
      <div
        class="box-border border-bottom border-[#d1d1d1] border-solid border-[1px]"
      ></div>
      <Menu
        class="!text-[#] !text-[12px]"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
      >
        <MenuItem class="!p-[15px] !h-[30px]" key="1">
          <Icon
            icon="gg:menu-grid-o"
            style="color: #4c5155"
            class="w-[20px] h-[20px] icon-hover"
          />
        </MenuItem>
        <MenuItem class="!p-[15px] !h-[30px]" key="1">
          <Icon
            icon="carbon:notification"
            style="color: #4c5155"
            class="w-[20px] h-[20px] icon-hover"
          />
        </MenuItem>
        <MenuItem class="!p-[15px] !h-[30px]" key="1">
          <Icon
            icon="tdesign:setting"
            style="color: #4c5155"
            class="w-[20px] h-[20px] icon-hover"
          />
        </MenuItem>
        <MenuItem class="!p-[15px] !h-[30px]" key="1">
          <Icon
            icon="simple-line-icons:question"
            style="color: #4c5155"
            class="w-[20px] h-[20px] icon-hover"
          />
        </MenuItem>
        <!-- <Menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="vertical"
          :items="items"
          @click="handleClick"
          key="sub1"
        >
          <Icon
            icon="bi:person-circle"
            style="color: #4c5155"
            class="w-[20px] h-[20px] icon-hover"
          />
        </Menu> -->
        <div
          v-for="item in mymenu"
          :key="item.id"
          class="menu-item"
          @click="toggleMenu(item)"
        >
          <Icon
            icon="bi:person-circle"
            style="color: #4c5155"
            class="w-[20px] h-[20px] icon-hover"
          />
          <!-- 子菜单 -->
          <div v-if="item.expanded" class="submenu">
            <div
              v-for="subItem in item.submenu"
              :key="subItem.id"
              class="submenu-item"
            >
              {{ subItem.title }}
            </div>
          </div>
          
        </div>
      </Menu>
    </LayoutSider>

    <Layout>
      <LayoutHeader
        class="!h-[60px] !bg-white"
        style="border-bottom: 1px solid #c9ceda"
      >
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
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
  Menu,
  MenuItem,
} from "ant-design-vue";
import { ref, h, reactive } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
const router = useRouter();

const mymenu = reactive([
  {
    id: 1,
    expanded: false,
    submenu: [
      { id: 1, title: "个人账户设置" },
      { id: 2, title: "服务订购" },
      { id: 3, title: "邀请成员" },
      { id: 4, title: "切换语言" },
      { id: 5, title: "工单中心" },
      { id: 6, title: "更新日志" },
      { id: 7, title: "退出" },
    ],
  },
]);
const toggleMenu = (item) => {
  item.expanded = !item.expanded;
};
const repo = () => {
  router.push({ path: "/coderepository" });
};
// const
</script>

<style scoped>
.menu-item {
  background-color: rgb(189, 189, 189);
  width: 300px;
  height: 600px;
  cursor: pointer;
  user-select: none; /* 防止文本被选中 */
  margin: 0 20px;
}

.submenu {
  margin-left: 50px; /* 子菜单缩进 */
  float: left;
}

.submenu-item {
  margin:  40px 0; /* 子菜单项间距 */
}
</style>
