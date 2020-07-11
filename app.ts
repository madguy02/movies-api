import express from 'express'
import cors from 'cors'
import * as params from './CONFIG/params'
import * as bodyParser from 'body-parser'
import * as _ from 'lodash'
import {movieSelection} from './modules/movieSelection'

const app = express()

app.use(cors())
app.use(express.json({limit: '10000kb'}))


app.post('/movies/selection', async (req: any, res: any) => {
    const body = _.get(req,'body.movies')
    const movies = await movieSelection(body)
    res.send({message: "sucess", data: movies })
})

const server = app.listen(params.port, () => {
    console.log (`Server running on port: ${params.port}`)
})
