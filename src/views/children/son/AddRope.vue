<template>
  <div>
    <div
      class="h-[40px] w-[150px] text-[20px] font-bold leading-[40px] flex justify-between"
    >
      <div class="w-[25px] h-[25px] mt-[10px] ml-[5px] bg-slate-300 flex justify-center">
        <Icon icon="gravity-ui:arrow-left"  style="color: #0066ff" class="" @click="returnrepo"/>
      </div>
      <div>创建代码仓库</div>
    </div>
    <div>
      <div>
        <div>所属项目<span>*</span></div>
        <input type="text" placeholder="所属项目" />
      </div>

      <div class="flex w-[100%]">
        <div>
          <div>仓库类型<span>*</span></div>
          <div
            class="w-[120px] h-[35px] leading-[35px] box-border border-[#bebebe] border-solid border-[1px] flex justify-start pl-[5px]"
          >
            <Icon icon="logos:git-icon" class="mt-[10px] mr-[10px]" />GIT仓库
          </div>
        </div>
        <div>
          <div>仓库名称<span>*</span></div>
          <input
            type="text"
            placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
            class="w-[450px] h-[35px]"
          />
        </div>
      </div>

      <div>
        <div>仓库描述</div>
        <textarea
          placeholder="请输入仓库描述"
          name=""
          id=""
          class="w-[80%] h-[100px]"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { getRope } from "@/service/index";
const router = useRouter();
const returnrepo = () => {
  router.push({ path: "/coderepository" });
};

const repo = {
  access_token: "bacd0fa0b4da52d3a1b2a2a4eecc9b4d",
  token_type: "bearer",
  expires_in: 86400,
  refresh_token:
    "2f7a0a072963bc3493f20f0214c4399728f8be9ae5cc03b4d9809548969751f6",
  scope:
    "user_info projects pull_requests issues notes keys hook groups gists enterprises",
};
getRope(repo).then((res) => {
  console.log(res);
});
</script>
