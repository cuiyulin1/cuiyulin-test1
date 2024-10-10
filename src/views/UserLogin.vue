<template>
  <div class="flex items-center">
      <div class="w-[526px] h-[100vh]">
          <Carousel :after-change="onChange">
              <div><img src="../assets//images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt=""></div>
              <div><img src="../assets//images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" alt=""></div>
              <div><img src="../assets//images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" alt=""></div>
          </Carousel>
      </div>
      <div class="flex-1 h-[100vh] flex justify-center items-center">
          <div class="w-[500px] flex flex-col justify-center items-center">
              
              <h1 class="text-[35px] mb-[60px]">登录，即刻创造您的应用</h1>
              <Space class="w-full" direction="vertical" size="large">
                  <Input 
                  class="h-[60px]"
                  size="large"
                  v-model:value="userLoginInfo.username"
                  placeholder="账号" 
                  />
                  <Input.Password 
                  class="h-[60px]"
                  size="large" 
                  v-model:value.lazy="userLoginInfo.password" 
                  autofocus 
                  placeholder="密码" 
                  />
              </Space>
              <div class="w-full my-[10px]">
                  <Radio v-model:checked="checked">我已阅读并同意
                  <Button type="link">《服务协议》</Button>
                  和
                  <Button type="link">《隐私政策》</Button>
              </Radio>
              </div>
              <Button @click="loginHandle" class="w-full h-[50px] mt-[30px]" type="primary">登录</Button>
          </div>

      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import to from "await-to-js";
import {Button,Carousel,Space,Input,Radio,App} from "ant-design-vue"
import { getAccessToken } from "@/service/index";

const router = useRouter()
const {notification} = App.useApp()

const userLoginInfo=ref({
  username:"1239303157@qq.com",
  password:"cyl20041030"
})
const loginHandle = async()=>{
  const loginData = {
      grant_type:"password",
      username:userLoginInfo.value.username,
      password:userLoginInfo.value.password,
      client_id:import.meta.env.VITE_CLIENT_ID,
      client_secret:import.meta.env.VITE_CLIENT_SECRET,
      scope:import.meta.env.VITE_CLIENT_SCOPE,
  }
  const [err,res] = await to(getAccessToken(loginData))
  if(!err){
      notification.success({message:"🎉恭喜你，登录成功！"})
      router.replace("/home")
  }
}
</script>
