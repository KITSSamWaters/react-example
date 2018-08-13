const express = require('express')
const server = express()

server.get('/api', (req, res) => {
  res.send({content: 'hello', ok: true})
  res.end()
})

server.use('/', express.static('dist'))
server.listen(4000)
console.log('Running on port 4000')
