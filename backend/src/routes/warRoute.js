import express from 'express'
import asyncHandler from '../middleware/asyncMiddleware.js'
import War from '../models/warModel.js'

const router = express.Router()

router.get('/', asyncHandler(async (req, res, next) => {
    const upcomingWars = await War.find({ passed: false }).lean()
    const pastWars = await War.find({ passed: true }).lean()

    res.status(200).json({ status: 'success', message: 'wars fetched successfully', data: { wars: { upcomingWars, pastWars } } })
}))

export default router
