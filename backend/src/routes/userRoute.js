import express from 'express'
import asyncHandler from '../middleware/asyncMiddleware.js'
import User from '../models/userModel.js'
import { userNotFound } from '../utils/errors.js'

const router = express.Router()

router.get('/', asyncHandler(async (req, res, next) => {
    const users = await User.find().select('-password').lean()

    return res.status(200).json({ status: 'success', message: 'Users found', data: { users } })
}))

router.get('/:username', asyncHandler(async (req, res, next) => {
    const username = req.params.username

    const user = await User.findOne({ username }).select('-password').lean()

    if (!user) {
        return next(userNotFound())
    }

    return res.status(200).json({ status: 'success', message: 'User found', data: { user } })
}))

router.post('/:username', asyncHandler(async (req, res, next) => {
    const username = req.params.username

    //req.body = { role, level, weaponPrimary, weaponSecondary, professions }
    const user = await User.findOneAndUpdate({ username }, req.body, { new: true }).select('-password')

    if (!user) {
        return next(userNotFound())
    }

    return res.status(200).json({ status: 'success', message: 'User found', data: { user } })
}))

export default router
