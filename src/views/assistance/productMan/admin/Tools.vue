<template>
    <div>
      <vue-headful title="农资管理"></vue-headful>
      <van-tabs sticky color="#6fb553" @change="changeTab">
        <van-tab title="农机管理">
          <tool-one></tool-one>
        </van-tab>
        <van-tab title="生产工具">
          <tool-one></tool-one>
        </van-tab>
        <van-tab title="农料管理">
          <tool-two></tool-two>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
import ToolsOne from './components/ToolsOne'
import ToolsTwo from './components/ToolsTwo'
export default {
  name: 'Tools',
  components: {
    'tool-one': ToolsOne,
    'tool-two': ToolsTwo
  },
  methods: {
    changeTab () {}
  }
}
</script>

<style scoped>

</style>
