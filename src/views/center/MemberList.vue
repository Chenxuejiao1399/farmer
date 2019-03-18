<template>
  <div>
    <vue-headful title="社员列表"></vue-headful>
    <div class="list_cell bottom_line">
      <img src="../../static/2.jpg" class="avatar">
      <span>张三</span>
      <span>女</span>
    </div>
    <div class="list_cell bottom_line">
      <img src="../../static/2.jpg" class="avatar">
      <span>张三</span>
      <span>女</span>
    </div>
    <div class="list_cell bottom_line">
      <img src="../../static/2.jpg" class="avatar">
      <span>张三</span>
      <span>女</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberList'
}
</script>

<style scoped>
  .list_cell{
    margin: 0 4vw;
    padding: 1.2vh 0;
    display: flex;
    align-items: center;
  }

  .list_cell span{
    padding: 0 2vw;
  }
</style>
