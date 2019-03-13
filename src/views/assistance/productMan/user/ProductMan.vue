<template>
    <div>
      <vue-headful title="生产管理"></vue-headful>
      <div class="product_card" @click="goDetail">
        <div class="product_tag">松土</div>
        <div class="product_con">
          <div class="product_row bottom_line">
            <div class="title">参与人员</div>
            <div class="member">
              <div class="member_item" v-for="(item,index) in lists" :key="index">
                <img class="avatar" src="../../../../static/2.jpg">
                <span v-text="item.name"></span>
              </div>
              <div>...</div>
            </div>
          </div>
          <div class="product_row">
            <div class="title">相关资料</div>
            <div class="texts">
              <div>
                茶叶施肥的技巧
              </div>
              <div>
                球盖菇种植与施肥探索的真谛细细浏览
              </div>
              <div>
                林下经济是近几年国家大力倡导的一种新型增收模式
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductMan',
  data () {
    return {
      lists: [{ name: '张可' }, { name: '张可' }, { name: '张可' }, { name: '张可' }, { name: '张可' }, { name: '张可' }]
    }
  },
  methods: {
    goDetail () {
      this.$router.push({ name: 'ProjectDetail3' })
    }
  }
}
</script>

<style scoped>
  .product_card{
    width: 92vw;
    margin: 2vh 4vw;
    box-shadow: 0 2px 4px rgba(200,200,200,0.5);
    border-radius: 4px;
  }

  .product_card .product_tag{
    background-color:#F29530;
    color: #ffffff;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 4px 17px;
    display: inline;
  }

  .product_card .product_con{
    width: inherit;
  }

  .product_row{
    display: flex;
    padding: 2vh 4vw;
  }

  .product_row .title{
    font-size: 11px;
    color:#666666;
    width: 35px;
    border-right: 1px dashed #D6D6D6;
    display: flex;
    align-items: center;
  }

  .product_row .member{
    padding: 0 2vw;
    width: 70vw;
    display: flex;
    justify-content: space-around;
  }

  .member .member_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 11px;
  }

  .product_row .texts{
    font-size: 12px;
    padding-left: 4vw;
  }

  .texts div{
    width: 70vw;
    padding-bottom: 5px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

</style>
