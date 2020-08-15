import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
import './db'
import routes from './routes'

app.use(routes)
app.listen(8080)