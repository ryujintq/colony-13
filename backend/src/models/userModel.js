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
    role: {
        type: String,
        default: 'Please Select'
    },
    level: {
        type: String,
        default: 'Please Select'
    },
    weaponPrimary: {
        type: String,
        default: 'Please Select'
    },
    weaponSecondary: {
        type: String,
        default: 'Please Select'
    },
})

export default mongoose.model('User', userSchema)
