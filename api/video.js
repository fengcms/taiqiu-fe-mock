function makeList () {
  let o = []
  for (let i = 1; i <= 10; i++) {
    o.push({
      id: i,
      name: `程序员的每日清台${i}`,
      videoYouku: 'http://www.youku.com/'
    })
  }
  return o
}

export const list = {
  get: {
    status: 0,
    data: {
      list: makeList()
    }
  }
};
