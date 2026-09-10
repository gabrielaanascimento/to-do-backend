import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import taskRoutes from './routes/task.routes.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/auth/users', userRoutes)
app.use('/tasks', taskRoutes)

app.get('/', (req,res) => {
  res.send("Olá mundo")
})

export default app
