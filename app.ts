import express from 'express'
import cors from 'cors'
import * as params from './CONFIG/params'

const app = express()

app.use(cors)
app.use(express.json({limit: '10000kb'}))


app.post('/movies/selection', async () => {

})

const server = app.listen(params.port, () => {
    console.log (`Server running on port: ${params.port}`)
})
