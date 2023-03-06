<template>
  <div id="app">
    <img alt="logo" src="./assets/bilibili.jpg">
    <RegisteApp msg="欢迎使用FRM, 通过邮箱完成注册!"/>
  </div>
</template>

<script>
import RegisteApp from './components/RegisteApp.vue'
export default {
  // name: 'App',
  components: {
    // 'RegisteApp':RegisteApp
    RegisteApp
  }
}
console.log(RegisteApp.mailbox)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  /* background-color: rgb(255, 211, 219); */
}
</style>
