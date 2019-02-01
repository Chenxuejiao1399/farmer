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

commonTools.drawLine = function (name) {
  let ctx = name.getContext('2d')
  ctx.strokeStyle = '#ff0000'
  ctx.moveTo(0, 0)
  ctx.lineTo(200, 100)
  ctx.stroke()
}

export {
  commonTools
}
