const dayjs = require('dayjs')

console.log("hello world")

console.log(dayjs('2018-08-08'))

console.log(dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss'));