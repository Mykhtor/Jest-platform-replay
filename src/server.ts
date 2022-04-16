import express from 'express'
import cors from 'cors'
import musicRoutes from './routes/music.routes'

// express config
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))


app.use('/music', musicRoutes)
// Routes


app.listen(8080, () => console.log("Server is running on http://localhost:8080"))

function musicroutes(arg0: string, musicroutes: any) {
  throw new Error('Function not implemented.')
}
