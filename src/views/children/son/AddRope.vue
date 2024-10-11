<template>
  <div>
    <div
      class="h-[80px] w-[200px] text-[20px] font-bold leading-[80px] flex justify-between"
    >
      <div
        class="w-[25px] h-[25px] mt-[30px] ml-[25px] flex justify-center rounded-[12px] sha"
      >
        <Icon
          icon="gravity-ui:arrow-left"
          style="color: #0066ff"
          class="mt-[3px]"
          @click="returnrepo"
        />
      </div>
      <div>创建代码仓库</div>
    </div>
    <div class="ml-[25px]">
      <div class="h-[80px]">
        <div class="font-bold mb-[5px] text-[16px]">
          所属项目<span class="text-[#ff0000] pl-[5px]">*</span>
        </div>
        <input
          type="text"
          placeholder="所属项目"
          class="w-[350px] h-[35px] pl-[15px]"
        />
      </div>

      <div class="flex w-[100%] h-[80px]">
        <div>
          <div class="font-bold mb-[5px] text-[16px]">
            仓库类型<span class="text-[#ff0000] pl-[5px]">*</span>
          </div>
          <div
            class="w-[130px] h-[35px] leading-[35px] box-border border-[#bebebe] border-solid border-[1px] flex justify-start pl-[10px]"
          >
            <Icon icon="logos:git-icon" class="mt-[11px] mr-[10px]" />GIT仓库
          </div>
        </div>
        <div>
          <div class="font-bold mb-[5px] text-[16px]">
            仓库名称<span class="text-[#ff0000] pl-[5px]">*</span>
          </div>
          <input
            type="text"
            placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
            class="w-[500px] h-[35px] box-border border-[#bebebe] border-solid border-[1px] pl-[15px]"
          />
        </div>
      </div>

      <div class="h-[150px]">
        <div class="font-bold mb-[5px] text-[16px]">仓库描述</div>
        <textarea
          placeholder="请输入仓库描述"
          name=""
          id=""
          class="w-[80%] h-[100px] box-border border-[#bebebe] border-solid border-[1px] pl-[15px] pt-[15px]"
        ></textarea>
      </div>
      <div class="h-[115px]">
        <div class="font-bold mb-[5px] text-[16px]">初始化仓库</div>
        <div>
          <CheckboxGroup
            v-model:value="value1"
            class="my-[5px] flex flex-col"
            :options="plainOptions"
            >生成README文件</CheckboxGroup
          ><br />
        </div>
      </div>

      <div class="h-[100px]">
        <div class="font-bold mb-[5px] text-[16px]">是否开源</div>
        <div>
          <RadioGroup v-model:value="value">
            <Radio :style="radioStyle" :value="1">私有仓库（仅对仓库成员可见，仓库成员可访问仓库。）</Radio>
            <Radio :style="radioStyle" :value="2">公开仓库</Radio>
          </RadioGroup>
        </div>
      </div>

      <div class="h-[30px]">
        <Button type="primary" class="bg-black">完成创建</Button>
        <Button class="ml-[10px]">取消</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckboxGroup,Radio,RadioGroup,Button} from "ant-design-vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { getRope } from "@/service/index";
import { reactive, ref } from 'vue';
const value = ref(1);
const radioStyle = reactive({
  display: 'flex',
  height: '30px',
  lineHeight: '30px',
});
const plainOptions = [
  "生成README文件",
  "添加.gitignore文件",
  "添加分支模型 (仓库创建后根据所选模型创建分支)",
];

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
