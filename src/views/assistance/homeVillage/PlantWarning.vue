<template>
    <div class="warn_bg">
      <div class="card_row">
        <div class="card_img" @click="goDetail">
          <img src="../../../static/images/highTem.png">
          <div class="card_texts">— 高温 —</div>
        </div>
        <div class="card_img">
          <img src="../../../static/images/wind.png">
          <div class="card_texts">— 暴风 —</div>
        </div>
      </div>
      <div class="card_row">
        <div class="card_img">
          <img src="../../../static/images/frost.png">
          <div class="card_texts">— 霜冻 —</div>
        </div>
        <div class="card_img">
          <img src="../../../static/images/pestis.png">
          <div class="card_texts">— 病虫害 —</div>
        </div>
      </div>
      <div class="card_row">
        <div class="card_img">
          <img src="../../../static/images/hail.png">
          <div class="card_texts">— 冰雹 —</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PlantWarning',
  data () { return {} },
  methods: {
    goDetail () {
      this.$router.push({ name: 'WarningDetail' })
    }
  }
}
</script>

<style scoped>
  .warn_bg{
    margin: 2vh 2vw;
  }

  .card_row{
    display: flex;
  }

  .card_img{
    margin: 1vh 2vw;
    position: relative;
  }

  .card_img img{
    width: 44vw;
    height: 16vh;
  }

  .card_texts{
    color: #ffffff;
    font-size: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44vw;
    text-align: center;
  }
</style>
