<template>
  <van-swipe :width="110" :show-indicators="false">
    <van-swipe-item v-for="item in listData" :key="item.id">
      <div class="img_card">
        <img :src="item.user_avatar"/>
        <div class="img_texts">
          <span class="name" v-text="item.user_name"></span>
          <span class="company" v-text="item.name"></span>
        </div>
        <div class="img_tag" v-if="listType === 'tag'">竹林村</div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'SwipeCard',
  data () {
    return {
      listData: []
    }
  },
  props: {
    listType: String
  },
  mounted () {
    this.getCompany()
  },
  methods: {
    getCompany () {
      let vm = this
      this.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/plans/1/companies',
        params: {}
      })
        .then(function (response) {
          if (response.status === 200) {
            vm.listData = response.data.data
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    }
  }
}
</script>

<style scoped>
   .img_card{
    padding: 1vh 0 2vh 2vw;
  }

  .img_card img{
    width: 100px;
    border-radius: 5px
  }

  .img_card .img_texts{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img_card .img_texts .name{
    font-weight: 600;
  }

  .img_card .img_texts .company{
    text-align: center;
    font-size: 12px;
    color: #666666;
  }

  .img_card .img_tag{
    background-color: #f29530;
    position: absolute;
    top: 88px;
    right: 3px;
    color: #fff;
    font-size: 12px;
    padding: 1px 4px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
