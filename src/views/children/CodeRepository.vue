<template>
  <div class="ml-[2vw]">
    <RouterLink
      to="/coderepository/recently"
      class="pb-[20px] text-center h-[4vw]"
      >最近访问</RouterLink
    >
    <RouterLink
      to="/coderepository/allrepo"
      class="pb-[20px] text-center ml-[1.5vw] h-[4vw] leading-[4vw]"
      >全部仓库</RouterLink
    >
    <RouterLink
      to="/coderepository/originrepo"
      class="pb-[20px]text-center ml-[1.5vw] h-[4vw]"
      >开源仓库</RouterLink
    >
    <Button type="primary" class=" float-right mr-[10px] mt-[1vw] bg-black" @click="addrepo">创建代码仓库</Button>
  </div>
  <RouterView></RouterView>
  
</template>

<script setup> 
import {Button} from "ant-design-vue"
import {useRouter} from "vue-router"
const router = useRouter()

const addrepo = () =>{
  router.push({path:"/addrepo"})
}
</script>

<!-- <style>
.navbar {
  display: flex;
  padding: 1rem;
  background-color: #f8f9fa;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #e9ecef;
}

.active {
  font-weight: bold;
  background-color: #dee2e6;
}
</style> -->
