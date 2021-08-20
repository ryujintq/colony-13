import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    isLeader: {
        type: Boolean,
        default: false
    },
    company: String,
    role: String,
    level: Number,
    weaponMain: String,
    weaponSecondary: String
})

export default mongoose.model('User', userSchema)
