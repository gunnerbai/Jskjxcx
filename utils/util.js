const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
// ,
// "tabBar": {
//   "color": "#7A7E83",
//   "selectedColor": "#3cc51f",
//   "borderStyle": "black",
//   "backgroundColor": "#ffffff",
//   "list": [
//     {
//       "pagePath": "pages/main/simple/text",
//       "text": "基础"
//     },
//     {
//       "pagePath": "pages/main/advanced/text",
//       "text": "高级"
//     },
//     {
//       "pagePath": "pages/main/mine/text",
//       "text": "我的"
//     }
//   ]
// }