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
    company: {
        type: String,
        default: ''
    },
    role: String,
    level: String,
    weaponPrimary: String,
    weaponSecondary: String,
    professions: [String],
    lastUpdated: Date
})

export default mongoose.model('User', userSchema)
