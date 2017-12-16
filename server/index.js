const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')
const massive = require('massive')

const { getBinsByShelf } = require('./controllers/bins')

const port = process.env.PORT || 3000

const app = express()

const postgres = // INSERT URI HERE

massive(postgres).then(db => app.set('db', db))

app.use(cors())
app.use(json())

app.get('/shelf/:shelf', getBinsByShelf)
app.delete('/shelf/:shelf/:bin', getBinsByShelf) // TODO
app.put('/shelf/:shelf/:bin', getBinsByShelf) // TODO

app.listen(port, () => console.log(`Server running on port ${port}`))
