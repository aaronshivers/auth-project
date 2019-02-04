const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

// GET /
app.get('/', (req, res) => res.render('index'))

// GET /secrets
app.get('/secrets', (req, res) => res.render('secrets'))

// GET /login
app.get('/login', (req, res) => res.render('login'))

app.listen(port, () => {
  console.log(`Server running on port ${ port }`)
})
