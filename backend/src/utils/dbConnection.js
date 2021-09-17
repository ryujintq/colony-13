import mongoose from "mongoose"

// const url = process.env.NODE_ENV === "test"
//     ? process.env.DB_TEST_URL
//     : process.env.DB_URL

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

if (process.env.NODE_ENV !== 'test') {
    mongoose.connection.on("open", () => console.log("connected to database"))
}

export { connectDB, closeDB }
