<template>
  <div>
    <vue-headful title="已报名列表"></vue-headful>
    <div class="register_list_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-baoming1"></use>
      </svg>
      已报名(<span>12</span>/20)
    </div>
    <div :class="[index !== (listData.length-1)?'bottom_line':'','register_list_item']"  v-for="(item,index) in listData" :key="index">
      <van-row type="flex" justify="space-between" align="center" class="register_list_item_content">
        <van-col span="18">
          <div class="register_list_left">
            <img src="../../../static/3.jpg" class="avatar">
            &nbsp;<span v-text="item"></span>
          </div>
        </van-col>
        <van-col span="6">2018-02-12</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisteredList',
  data () {
    return {
      listData: ['刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝', '刘贝贝']
    }
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
