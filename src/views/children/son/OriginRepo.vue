<template>
    <div class=" ml-[40%] mt-[10%]">
        <img src="@/assets/images/4.png" class="w-[100px] h-[100px]" alt="">
        <div class="w-[100px] text-center text-[#8f8f8f]">暂无数据</div>
    </div>
</template>

<script setup>
import {getRope} from "@/service/index.js"

getRope().then((res)=>{
    console.log(res);
    
})
</script>