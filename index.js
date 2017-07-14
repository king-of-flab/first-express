const express = require('express')
const app = express()


//listening for request
// console.log(express)

//all requests will have to know what the public folder is where we put our static files
//public is referring to directory in the root folder
app.use(express.static('public'))

//all request will have to go through this middleware
app.use(function(req, res, next) {
  console.log('first middleware')
  next()
})

app.use(function(req, res, next) {
  console.log('second middleware')
  next()
})


app.get('/', function(req, res) {
  res.send('index.html')
})

app.get('/about/:name', function(req, res) {
  res.send(req.params)
})

app.get('/faq', function(req, res) {
  res.send('faq page')
})

app.post('/') //what does this do?

app.listen(3000, function () {
  console.log('express is running on port 3000')
})
