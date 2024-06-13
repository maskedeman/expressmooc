const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hellow World!</h1><h1>Successfully Deployeddddd!</h1>')
})

console.log('Successfully Deployeddddd!') 
const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})