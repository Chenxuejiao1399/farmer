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
  oDate.setDate(oDate.getDate() + myDay)
  document.cookie = name + '=' + value + '; expires=' + oDate
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
    case '305':
      weatherIcon = '#icon-icon-test'
      break
    case '104':
      weatherIcon = '#icon-ugrave'
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
export {
  commonTools
}
