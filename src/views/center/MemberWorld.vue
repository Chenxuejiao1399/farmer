<template>
  <div class="memberL_bg">
    <vue-headful title="社员天地"></vue-headful>
    <van-tabs sticky color="#6fb553">
      <van-tab title="社员风采">
        <demeanor></demeanor>
      </van-tab>
      <van-tab title="社员作品">
        <works></works>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Works from './components/Works'
import Demeanor from './components/Demeanor'
export default {
  name: 'MemberWorld',
  components: {
    'works': Works,
    'demeanor': Demeanor
  }
}
</script>

<style scoped>

</style>
