const path = require('path')

const express = require('express')
const hbs = require('hbs')

const getPhoto = require('./utils/nasa-api')
const { get } = require('http')
const { url } = require('inspector')

const app = express()
let port = process.env.PORT
if( port == null || port == "") {
  port = 3000;
}

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  getPhoto().then(( obj ) => {
    res.render('index', {
      date: obj.date,
      explanation: obj.explanation,
      title: obj.title,
      url: obj.url
    })
  }).catch((e) => {
    console.log(e)
  })  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
