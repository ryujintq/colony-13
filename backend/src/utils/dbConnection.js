import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect(
        process.env.DB_URL_LOCAL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
}

const closeDB = () => {
    mongoose.disconnect()
}

export { connectDB, closeDB }
