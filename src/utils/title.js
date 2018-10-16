
export function seoInfo (title, keyword, desc) {
  document.title = title
  var metas = document.getElementsByTagName('meta')
  for (var i in metas) {
    if (metas[i].name === 'keywords') {
      if (keyword === '') {
        keyword = title
      }
      metas[i].content = keyword
    } else if (metas[i].name === 'description') {
      var dd = desc.replace(/<\/?.+?>/g, '')
      var dds = dd.replace(/[\r\n]/g, '')
      metas[i].content = dds.substring(0, 120)
    }
  }
}
