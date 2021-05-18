let supportFontFamily = function(font) {
  //非字符串取消
  if (typeof font != 'string') {
    return false
  }
  // 默认字体跳过
  let defaultFont = 'Arial'
  if (font.toLowerCase() == defaultFont.toLowerCase()) {
    return true
  }
  let benchmark = 'a' //基准字母
  let benchmarkSize = 100 //基准字母大小
  let width = 100,
    height = 100 // 宽高
  let canvas = document.createElement('canvas')
  let context = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  context.textAlign = 'center'
  context.fillStyle = 'black'
  context.textBaseline = 'middle'
  let getData = function(font2) {
    context.clearRect(0, 0, width, height)
    context.font = benchmarkSize + 'px ' + font2 + ', ' + defaultFont
    context.fillText(benchmark, width / 2, height / 2)
    let arr = context.getImageData(0, 0, width, height).data
    return [].slice.call(arr).filter(function(item) {
      return item != 0
    })
  }
  return getData(defaultFont).join('') !== getData(font).join('')
}

// export default supportFontFamily