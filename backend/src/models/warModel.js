import mongoose from 'mongoose'

const warSchema = new mongoose.Schema({
    settlement: String,
    position: String,
    groups: Array,
    result: String,
    passed: { type: Boolean, default: false },
    date: Date
})

export default mongoose.model('War', warSchema)
