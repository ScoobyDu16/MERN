const express = require('express')
const app     = express()

const PORT= process.env.PORT || 5000

app.get('/', (req, res)=> res.send('Api is Settled up'))

app.listen(PORT, ()=> console.log(`Server started on Port : ${PORT}`))