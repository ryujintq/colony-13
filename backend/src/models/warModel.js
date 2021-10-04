import mongoose from 'mongoose'

const warSchema = new mongoose.Schema({
    settlement: String,
    position: String,
    groups: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Group' }],
    result: String,
    passed: { type: Boolean, default: false },
    date: Date
})

export default mongoose.model('War', warSchema)
