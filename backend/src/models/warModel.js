import mongoose from 'mongoose'

const warSchema = new mongoose.Schema({
    settlement: String,
    position: String,
    groups: {
        group1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group3: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group4: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group5: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group6: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group7: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group8: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group9: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
        group10: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
    },
    result: String,
    passed: { type: String, default: false },
    date: Date
})

export default mongoose.model('War', warSchema)
