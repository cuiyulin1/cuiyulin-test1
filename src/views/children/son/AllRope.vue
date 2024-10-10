<template>
  <div class="w-[100%] mt-[10%] text-center text-[#616d81]">
    <div class="text-[2.5vw] font-bold text-[#000]">欢迎使用代码仓库</div>
    <div>
      代码仓库用于托管基于GIT或SVN管理的代码库。通过Review合并请求来审查代码变更。
    </div>
    <div>版本发布可以用来标记、发布代码版本。</div>
    <div class="flex justify-center">
      <div>
        <img src="@/assets/images/1.svg" alt="" />
        
      </div>

      <Icon
        icon="guidance:left-arrow"
        style="color: #616d81"
        class="mt-[55px]"
      />
      <div><img src="@/assets/images/2.svg" alt="" /></div>
      <Icon
        icon="guidance:left-arrow"
        style="color: #616d81"
        class="mt-[55px]"
      />
      <div><img src="@/assets/images/3.svg" alt="" /></div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
