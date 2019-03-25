<template>
  <div>
    <vue-headful title="线下学习" description="培训天地之线下学习"></vue-headful>
    <van-tabs>
      <van-tab title="活动列表">
        <activity-list :type="'all'"></activity-list>
      </van-tab>
      <van-tab title="已参加活动">
        <activity-list :type="'my'"></activity-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ActivityList from './components/ActivityList'
export default {
  name: 'OfflineLearning',
  components: {
    'activity-list': ActivityList
  }
}
</script>

<style scoped>

</style>
