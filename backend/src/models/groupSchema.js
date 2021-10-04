import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema({
    groupUsers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }],
    groupId: Number
})

export default mongoose.model('Group', groupSchema)
