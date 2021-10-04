import express from 'express'
import asyncHandler from '../middleware/asyncMiddleware.js'
import War from '../models/warModel.js'
import { warNotFound } from '../utils/errors.js'
import { sortGroups, sortWarsAsc, sortWarsDesc } from '../utils/sortWars.js'
import Group from '../models/groupSchema.js'

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

    upcomingWars.sort(sortWarsAsc)
    pastWars.sort(sortWarsDesc)

    res.status(200).json({ status: 'success', message: 'wars fetched successfully', data: { wars: { upcomingWars, pastWars } } })
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const war = await War.findById(id).populate({ path: 'groups', populate: { path: 'groupUsers', model: 'User' } }).lean()

    if (!war) {
        return next(warNotFound())
    }

    war.groups.sort(sortGroups)

    res.status(200).json({ status: 'success', message: 'War found', data: { war } })
}))

router.post('/', asyncHandler(async (req, res, next) => {
    const { settlement, position, date } = req.body

    const groups = []

    for (let i = 0, iEnd = 10; i < iEnd; i++) {
        const group = await Group.create({
            groupUsers: [],
            groupId: i + 1
        })
        groups.push(group)
    }

    await War.create({
        settlement,
        position,
        date,
        groups
    })

    res.status(200).json({ status: 'success', message: 'New war created' })
}))

router.put('/:id', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const { result } = req.body

    await War.findByIdAndUpdate({ _id: id }, { result, passed: true })

    return res.status(200).json({ status: 'success', message: 'War ended succesfully' })
}))

router.put('/:id/groups', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const { groups } = req.body

    for (let i = 0, iEnd = groups.length; i < iEnd; i++) {
        const { _id, userIds } = groups[i]
        await Group.findByIdAndUpdate({ _id }, { groupUsers: [...userIds] })
    }

    return res.status(200).json({ status: 'success', message: 'War groups saved succesfully' })
}))

export default router
