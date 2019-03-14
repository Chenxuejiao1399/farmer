<template>
  <div>
    <vue-headful title="生活天地"></vue-headful>
    <van-tabs sticky>
      <van-tab title="幽默笑话">
        <swipe></swipe>
      </van-tab>
      <van-tab title="乡村旅游">内容 2</van-tab>
      <van-tab title="医疗动态">内容 3</van-tab>
      <van-tab title="教育动态">内容 4</van-tab>
      <van-tab title="生态美食">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Swipe from './components/Swipe'
export default {
  name: 'LiveWorld',
  components: {
    'swipe': Swipe
  }
}
</script>

<style scoped>

</style>
