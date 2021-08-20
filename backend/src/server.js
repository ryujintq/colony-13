import app from './app.js'
import { connectDB } from './utils/dbConnection.js'

//connect to database
await connectDB()

//start server
const port = process.env.PORT || 5001
app.listen(port, console.log(`Server listening on port ${port}`))
