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

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})