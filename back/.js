// const date = new Date().toLocaleDateString()
// const q = Date.parse(date)
// const w = q - new Date()
// const y = getDay(w)
// console.log(w)
// console.log(y)

function getNumberOfDays(start, end) {
  const date1 = new Date(start)
  const date2 = new Date(end)

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime()

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay)

  return diffInDays
}

console.log(getNumberOfDays('2/1/2021', '3/1/2021'))

// const date = new Date().toLocaleDateString()
// console.log(date)
// console.log(typeof date)
let birthday = new Date(1995, 11, 17).toLocaleDateString()
console.log(birthday)
// birthday = new Date().toLocaleDateString("en-US")

// console.log(birthday)

const arr = [
  { id: 2, text: 'Hello' },
  { id: 3, text: 'people' },
  { id: 4, text: 'try' },
]

// const search = (x,arr) => {
//   const test = arr.filter(el => {
//     return `${el.text}`.includes(x)
//   })
//   return test
// }
// search('Hello',arr)
