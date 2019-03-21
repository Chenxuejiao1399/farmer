import axios from 'axios'
const commonTools = {}

commonTools.g_restUrl = 'http://farmerapi.companycheck.cn/api'

commonTools.getQueryString = function (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  } else {
    return null
  }
}

/* 中国标准时间转换 2019-02-01 */
commonTools.formatDate = function (date) {
  let d = date
  let year = d.getFullYear()
  let month = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)
  let date1 = d.getDate() > 9 ? d.getDate() : '0' + d.getDate()
  return year + '-' + month + '-' + date1
}

/* 字符串截取 */
commonTools.subStr = function (str, strLength) {
  return str.substring(0, strLength)
}

commonTools.setCookie = function (name, value, myDay) {
  var oDate = new Date()
  oDate.setTime(oDate.getTime() + (myDay * 60 * 1000))// 单位是毫秒
  document.cookie = name + '=' + value + '; expires=' + oDate.toUTCString()
}

commonTools.getCookie = function (name) {
  // document.cookie获取当前网站的所有cookie
  var arr = document.cookie.split('; ')
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split('=')
    if (arr1[0] === name) {
      return arr1[1]
    }
  }
  return ''
}

commonTools.getUrlParams = function (names, urlSearch) { // 获取？后面的参数
  let urlValue = '' // 以？*&来拆分
  let params = urlSearch.split(/[?*&]/)
  for (let i = 0; i < params.length; i++) { // 如果url参数里包含传递过来names字段，则取=后面的部分
    if (params[i].indexOf(names) >= 0) {
      urlValue = params[i].split('=')[1]
      return urlValue
    }
  }
  return urlValue
}

/* 天气相关图标 */
commonTools.setIcon = function (condCode) {
  let weatherIcon = ''
  switch (condCode) {
    case '100':// 晴
      weatherIcon = '#icon-qing'
      break
    case '101':// 多云
      weatherIcon = '#icon-duoyun'
      break
    case '102':// 少云
      weatherIcon = '#icon-shaoyun'
      break
    case '103':// 晴间多云
      weatherIcon = '#icon-qingjianduoyun'
      break
    case '104':// 阴
      weatherIcon = '#icon-yin'
      break
    case '200':// 有风
      weatherIcon = '#icon-youfeng'
      break
    case '201':// 平静
      weatherIcon = '#icon-pingjing'
      break
    case '202':// 微风
      weatherIcon = '#icon-weifenghefengqingfeng'
      break
    case '203':// 和风
      weatherIcon = '#icon-weifenghefengqingfeng'
      break
    case '204':// 清风
      weatherIcon = '#icon-weifenghefengqingfeng'
      break
    case '205':// 强风/劲风
      weatherIcon = '#icon-qiangfengjifengdafengliefeng'
      break
    case '206':// 疾风
      weatherIcon = '#icon-qiangfengjifengdafengliefeng'
      break
    case '207':// 大风
      weatherIcon = '#icon-qiangfengjifengdafengliefeng'
      break
    case '208':// 烈风
      weatherIcon = '#icon-qiangfengjifengdafengliefeng'
      break
    case '209':// 风暴
      weatherIcon = '#icon-fengbaokuangbaofengjufenglongjuanfengredaifengbao'
      break
    case '210':// 狂爆风
      weatherIcon = '#icon-fengbaokuangbaofengjufenglongjuanfengredaifengbao'
      break
    case '211':// 飓风
      weatherIcon = '#icon-fengbaokuangbaofengjufenglongjuanfengredaifengbao'
      break
    case '212':// 龙卷风
      weatherIcon = '#icon-fengbaokuangbaofengjufenglongjuanfengredaifengbao'
      break
    case '213':// 热带风暴
      weatherIcon = '#icon-fengbaokuangbaofengjufenglongjuanfengredaifengbao'
      break
    case '300':// 阵雨
      weatherIcon = '#icon-zhenyu'
      break
    case '301':// 强阵雨
      weatherIcon = '#icon-qiangzhenyu'
      break
    case '302':// 雷阵雨
      weatherIcon = '#icon-leizhenyu'
      break
    case '303':// 强雷阵雨
      weatherIcon = '#icon-qiangleizhenyu'
      break
    case '304':// 雷阵雨伴有冰雹
      weatherIcon = '#icon-leizhenyubanyoubingbao'
      break
    case '305':// 小雨
      weatherIcon = '#icon-xiaoyu'
      break
    case '306':// 中雨
      weatherIcon = '#icon-zhongyu-xiaodaozhongyu'
      break
    case '307':// 大雨
      weatherIcon = '#icon-dayu-zhongdaodayu'
      break
    case '308':// 极端降雨
      weatherIcon = '#icon-jiduanjiangyu-tedabaoyu-dabaoyudaotedabaoyu'
      break
    case '309':// 毛毛雨/细雨
      weatherIcon = '#icon-maomaoyuxiyu'
      break
    case '310':// 暴雨
      weatherIcon = '#icon-baoyu-dadaobaoyu'
      break
    case '311':// 大暴雨
      weatherIcon = '#icon-dabaoyu-baoyudaodabaoyu'
      break
    case '312':// 特大暴雨
      weatherIcon = '#icon-jiduanjiangyu-tedabaoyu-dabaoyudaotedabaoyu'
      break
    case '313':// 冻雨
      weatherIcon = '#icon-dongyu'
      break
    case '314':// 小到中雨
      weatherIcon = '#icon-zhongyu-xiaodaozhongyu'
      break
    case '315':// 中到大雨
      weatherIcon = '#icon-dayu-zhongdaodayu'
      break
    case '316':// 大到暴雨
      weatherIcon = '#icon-baoyu-dadaobaoyu'
      break
    case '317':// 暴雨到大暴雨
      weatherIcon = '#icon-dabaoyu-baoyudaodabaoyu'
      break
    case '318':// 大暴雨到特大暴雨
      weatherIcon = '#icon-jiduanjiangyu-tedabaoyu-dabaoyudaotedabaoyu'
      break
    case '399':// 雨
      weatherIcon = '#icon-yu'
      break
    case '400':// 小雪
      weatherIcon = '#icon-xiaoyu'
      break
    case '401':// 中雪
      weatherIcon = '#icon-zhongxue-xiaodaozhongxue'
      break
    case '402':// 大雪
      weatherIcon = '#icon-daxue-zhongdaodaxue'
      break
    case '403':// 暴雪
      weatherIcon = '#icon-baoxue-dadaobaoxue'
      break
    case '404':// 雨夹雪
      weatherIcon = '#icon-yujiaxue-zhenyujiaxue'
      break
    case '405':// 雨雪天气
      weatherIcon = '#icon-yuxuetianqi'
      break
    case '406':// 阵雨夹雪
      weatherIcon = '#icon-yujiaxue-zhenyujiaxue'
      break
    case '407':// 阵雪
      weatherIcon = '#icon-zhenxue'
      break
    case '408':// 小到中雪
      weatherIcon = '#icon-zhongxue-xiaodaozhongxue'
      break
    case '409':// 中到大雪
      weatherIcon = '#icon-daxue-zhongdaodaxue'
      break
    case '410':// 大到暴雪
      weatherIcon = '#icon-baoxue-dadaobaoxue'
      break
    case '499':// 雪
      weatherIcon = '#icon-xue'
      break
    case '500':// 薄雾
      weatherIcon = '#icon-baowu'
      break
    case '501':// 雾
      weatherIcon = '#icon-wu'
      break
    case '502':// 霾
      weatherIcon = '#icon-mai'
      break
    case '503':// 扬沙
      weatherIcon = '#icon-yangsha'
      break
    case '504':// 浮尘
      weatherIcon = '#icon-fuchen'
      break
    case '507':// 沙尘暴
      weatherIcon = '#icon-shachenbao'
      break
    case '508':// 强沙尘暴
      weatherIcon = '#icon-qiangshachenbao'
      break
    case '509':// 浓雾
      weatherIcon = '#icon-nongwu-qiangnongwu-dawu-teqiangnongwu'
      break
    case '510':// 强浓雾
      weatherIcon = '#icon-nongwu-qiangnongwu-dawu-teqiangnongwu'
      break
    case '511':// 中度霾
      weatherIcon = '#icon-zhongdumai1'
      break
    case '512':// 重度霾
      weatherIcon = '#icon-zhongdumai'
      break
    case '513':// 严重霾
      weatherIcon = '#icon-yanzhongmai'
      break
    case '514':// 大雾
      weatherIcon = '#icon-nongwu-qiangnongwu-dawu-teqiangnongwu'
      break
    case '515':// 特强浓雾
      weatherIcon = '#icon-nongwu-qiangnongwu-dawu-teqiangnongwu'
      break
    case '900':// 热
      weatherIcon = '#icon-re1'
      break
    case '901':// 冷
      weatherIcon = '#icon-leng'
      break
    case '999':// 未知
      weatherIcon = '#icon-weizhi'
      break
  }
  return weatherIcon
}

/* 天气日期转化为星期几 */
commonTools.getWeek = function (date) {
  let weekN = ''
  let dateNew = new Date(date).getDay()
  switch (dateNew) {
    case 1:
      weekN = '星期一'
      break
    case 2:
      weekN = '星期二'
      break
    case 3:
      weekN = '星期三'
      break
    case 4:
      weekN = '星期四'
      break
    case 5:
      weekN = '星期五'
      break
    case 6:
      weekN = '星期六'
      break
    case 0:
      weekN = '星期日'
      break
  }
  return weekN
}

commonTools.checkToken = function () {
  let token = commonTools.getCookie('user_token')
  let newToken = token.replace('"', '').replace('"', '')
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: commonTools.g_restUrl + '/authorizations/current',
      headers: { 'Authorization': 'Bearer' + newToken }
    })
      .then(function (response) {
        commonTools.setCookie('user_token', JSON.stringify(response.data.access_token), 60)// 存用户的新token(60分钟)
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
export {
  commonTools
}
