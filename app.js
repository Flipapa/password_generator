const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser(now included in express)
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)  
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})