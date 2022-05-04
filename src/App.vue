<template>
  <div id="app">
    <router-view />
    <h1>内容</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="demo">测试内容</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
.demo{
  width: 200px;
  height: 200px;
  background-color: yellow;
}
</style>
