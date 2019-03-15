<template>
  <div>
    <vue-headful title="生活天地"></vue-headful>
    <van-tabs sticky>
      <van-tab title="幽默笑话">
        <live-list2 :type="2"></live-list2>
      </van-tab>
      <van-tab title="乡村旅游">
        <swipe></swipe>
        <live-list :type="1"></live-list>
      </van-tab>
      <van-tab title="医疗动态">
        <live-list2 :type="2"></live-list2>
      </van-tab>
      <van-tab title="教育动态">
        <live-list2 :type="2"></live-list2>
      </van-tab>
      <van-tab title="生态美食">
        <swipe></swipe>
        <live-list :type="1"></live-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Swipe from './components/Swipe'
import LiveList from './components/LiveList'
import LiveList2 from './components/LiveList2'
export default {
  name: 'LiveWorld',
  components: {
    'swipe': Swipe,
    'live-list': LiveList,
    'live-list2': LiveList2
  }
}
</script>

<style scoped>

</style>
