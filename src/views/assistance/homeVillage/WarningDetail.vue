<template>
  <div class="detail_top">
    <vue-headful title="项目详情"></vue-headful>
    <img src="../../../static/images/highTem.png">
    <div class="masking"></div>
    <div class="detail_title1">高温预警</div>
    <div class="detail_content1">
      高温会对农作物的正常生长发育造成影响，引发热害，应该积极预防和防治。
    </div>
    <div class="detail_title2">预防措施</div>
    <div class="detail_content2">
      <ol>
        <li>要注意在户外工作时，采取有效防护措施，切忌在太阳下长时间裸晒皮肤，最好带冰凉的饮料;</li>
        <li>要注意不要在阳光下疾走，也不要到人聚集的地方。从外面回到室内后，切勿立即开空调吹;</li>
        <li>要尽量避开在上午10时至下午4时这一时段出行，应在口渴之前就补充水分;</li>
        <li>要注意高温天饮食卫生，防止胃肠感冒;</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WarningDetail'
}
</script>

<style scoped>
  .detail_top img{
    width: 100vw;
    height: 20vh;
  }

  .masking{
    position: absolute;
    background-color: #fff;
    width: 100vw;
    height: 2vh;
    top: 20vh;
    box-shadow: 0 -35px 80px #fff;
  }

  .detail_title1,.detail_title2{
    margin: 2vh 4vw;
    font-size: 18px;
    color: #969799;
  }

  .detail_content1,.detail_content2{
    margin: 0 4vw 2vh 4vw;
  }
</style>
