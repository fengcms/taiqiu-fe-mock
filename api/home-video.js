const makeItem = index => {
  let res = []
  for (let i = 1; i <= 12; i++) {
    res.push({
      id: i,
      title: `精彩视频赏析${index}${i}`,
      cover: 'http://img.buole.com/2018/08/26/2018826034558-ckmyb2.jpg'
    })
  }
  return res
}
const makeList = () => {
  let res = []
  for (let i = 1; i <= 4; i++) {
    res.push({
      id: i,
      children: makeItem(i)
    })
  }
  return res
}
module.exports = {
  list: {
    get: {
      status: 0,
      data: {
        list: makeList()
      }
    }
  }
}
