import express from 'express'
import asyncHandler from '../middleware/asyncMiddleware.js'
import War from '../models/warModel.js'
import { warNotFound } from '../utils/errors.js'
import sortWars from '../utils/sortWars.js'

const router = express.Router()

router.get('/', asyncHandler(async (req, res, next) => {
    const wars = await War.find({}).select('-groups').lean()

    const upcomingWars = []
    const pastWars = []

    wars.forEach(war => {
        war.date = new Date(war.date).toString().slice(0, 21)
        if (war.passed === true) {
            pastWars.push(war)
        } else {
            upcomingWars.push(war)
        }
    })

    upcomingWars.sort(sortWars, 'asc')
    pastWars.sort(sortWars, 'desc')

    res.status(200).json({ status: 'success', message: 'wars fetched successfully', data: { wars: { upcomingWars, pastWars } } })
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const war = await War.findById(id).lean()

    if (!war) {
        return next(warNotFound())
    }

    res.status(200).json({ status: 'success', message: 'War found', data: { war } })
}))

router.post('/', asyncHandler(async (req, res, next) => {
    const { settlement, position, date } = req.body

    await War.create({
        settlement,
        position,
        date
    })

    res.status(200).json({ status: 'success', message: 'New war created' })
}))

router.put('/:id', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const { result } = req.body

    await War.findByIdAndUpdate({ _id: id }, { result, passed: true })

    return res.status(200).json({ status: 'success', message: 'War ended succesfully' })
}))

export default router
