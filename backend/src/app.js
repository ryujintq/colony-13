import express from 'express'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import warRoute from './routes/warRoute.js'
import errorMiddleware from './middleware/errorMiddleware.js'
import authMiddleware from './middleware/authMiddleware.js'
import cors from 'cors'

//initialize server
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/auth', authRoute)
app.use(authMiddleware)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/wars', warRoute)

//error middleware
app.use(errorMiddleware)

export default app
