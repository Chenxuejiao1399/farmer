<template>
  <div>
    <vue-headful title="已报名列表"></vue-headful>
    <div class="register_list_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-baoming1"></use>
      </svg>
      已报名(<span v-text="volunteers_count"></span>/<span v-text="limit"></span>)
    </div>
    <div :class="[index !== (listData.length-1)?'bottom_line':'','register_list_item']"  v-for="(item,index) in listData" :key="item.id">
      <van-row type="flex" justify="space-between" align="center" class="register_list_item_content">
        <van-col span="14">
          <div class="register_list_left">
            <img :src="item.avatar" class="avatar">
            &nbsp;<span v-text="item.name"></span>
          </div>
        </van-col>
        <van-col span="10"><span v-text="item.pivot.created_at"></span></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisteredList',
  data () {
    return {
      listData: [],
      limit: 0,
      volunteers_count: 0
    }
  },
  mounted () {
    let vm = this
    vm.listData = this.$route.query.data
    vm.limit = this.$route.query.limit
    vm.volunteers_count = this.$route.query.count
  }
}
</script>

<style scoped>
  .register_list_title{
    padding: 2vh 4vw 1vh;
  }

  .register_list_item{
    margin: 2vh 4vw;
  }

  .register_list_item_content{
    padding-bottom: 2vh;
  }

  .register_list_left{
    display: flex;
    align-items: center;
  }
</style>
