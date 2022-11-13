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

console.log(getNumberOfDays('2/1/2021', '3/1/2021'), typeof diffInDays)

// const date = new Date().toLocaleDateString()
// console.log(date)
// console.log(typeof date)
let birthday = new Date(1995, 11, 17)
birthday = new Date().toLocaleDateString("en-US")

console.log(birthday)