const express = require('express')

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.send({beer: 'Brahma'})
})

app.listen(PORT, () => console.log(`Conncted to ${PORT}`))