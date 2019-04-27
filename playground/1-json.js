const fs = require('fs')
// const book = {
//     title : "Ego is the Enemy",
//     author: 'Ryan Holiday'
// }
//
//
// const bookJson = JSON.stringify(book)
// console.log(bookJson)
// fs.writeFileSync('new_file.json', bookJson)
//
// const parseData = JSON.parse(bookJson)
// console.log(parseData.author)

const content = fs.readFileSync('new_file.json')
console.log(JSON.parse(content))


