const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.get('/', (req, res) => {
  res.send(`<h1>This is a Password Generator!</h1>`)
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})