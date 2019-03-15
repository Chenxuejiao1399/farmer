<template>
    <div>
      <vue-headful title="社员风采"></vue-headful>
      <div class="demeanor_card_list">
        <div class="demeanor_card_item">
          <img src="../../../static/2.jpg">
          <div class="demeanor_card_item_title">我村社员王一当选先进工作者</div>
        </div>
        <div class="demeanor_card_item">
          <img src="../../../static/2.jpg">
          <div class="demeanor_card_item_title">我村社员王一当选先进工作者</div>
        </div>
        <div class="demeanor_card_item">
          <img src="../../../static/2.jpg">
          <div class="demeanor_card_item_title">我村社员王一当选先进工作者</div>
        </div>
        <div class="demeanor_card_item">
          <img src="../../../static/2.jpg">
          <div class="demeanor_card_item_title">我村社员王一当选先进工作者</div>
        </div>
        <div class="demeanor_card_item">
          <img src="../../../static/2.jpg">
          <div class="demeanor_card_item_title">我村社员王一当选先进工作者</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Demeanor'
}
</script>

<style scoped>
  .demeanor_card_list{
    display: flex;
    flex-wrap: wrap;
    margin: 1vh 2vw;
  }

  .demeanor_card_item{
    background-color: #ffffff;
    width: 44vw;
    border-radius: 4px;
    box-shadow:3px 3px 15px #c9c9c9;
    padding-bottom: 1.5vh;
    margin: 1vh 2vw;
  }

  .demeanor_card_item img{
    width: 44vw;
    height: 16vh;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .demeanor_card_item_title{
    padding: 1vh 2vw 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
  }
</style>
