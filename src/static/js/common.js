const commonTools = {}

commonTools.getQueryString = function (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  } else {
    return null
  }
}

/* 中国标准时间转换 */
commonTools.formatDate = function (date) {
  var d = date
  var year = d.getFullYear()
  var month = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)
  var date1 = d.getDate() > 9 ? d.getDate() : '0' + d.getDate()
  return year + '-' + month + '-' + date1
}

export {
  commonTools
}
