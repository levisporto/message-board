const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.use(express.static('public'))

app.get('/messages', (req, res) => {
    const messages = [
        {id:1, nome: 'Rola', autor: 'Viado'}
    ]
  res.json(messages)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
