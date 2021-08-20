import express from 'express'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import errorMiddleware from './middleware/errorMiddleware.js'

//initialize server
const app = express()

//middleware
app.use(express.json())

//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)

//error middleware
app.use(errorMiddleware)

export default app
