<template>
  <div class="process_bg">
    <vue-headful title="任务"></vue-headful>
    <van-tabs sticky color="#6fb553" @change="changeTab">
      <van-tab title="已派发任务">
        <Tasked></Tasked>
      </van-tab>
      <van-tab title="派发任务">
        <Untask></Untask>
      </van-tab>
    </van-tabs>
    <div class="tasked_bottom" v-if="isBottom">
      <div class="tasked_success">已完成</div>
      <div class="tasked_fail">未完成</div>
    </div>
  </div>
</template>

<script>
import Tasked from './components/Tasked'
import Untask from './components/Untask'
export default {
  name: 'ProcessDetail',
  data() {
    return {
      isBottom: true
    }
  },
  components: {
    Tasked,
    Untask
  },
  methods: {
    changeTab(index) {
      if (index === 0) {
        this.isBottom = true
      } else if (index === 1) {
        this.isBottom = false
      }
    }
  }
}
</script>

<style scoped>
.tasked_bottom {
  position: absolute;
  bottom: 0;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tasked_success {
  width: 50vw;
  background-color: #6bb44e;
  padding: 1.5vh 0;
}

.tasked_fail {
  width: 50vw;
  background-color: #e95c44;
  padding: 1.5vh 0;
}
</style>
<style>
.van-tabs__nav--card {
  margin: 0 100px;
}
</style>
