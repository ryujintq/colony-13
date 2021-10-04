import axios from './axios'

export const createNewWar = async (settlement, position, warDate, goBack) => {
    try {
        await axios.post('/wars', { settlement, position, date: warDate })
        goBack()
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async () => {
    try {
        const { data: { data: { users } } } = await axios.get('/users')
        return users
    } catch (error) {
        console.log(error)
    }
}

export const getAllWars = async (setUpcomingWars, setPastWars, setLoading) => {
    try {
        const { data: { data } } = await axios.get('/wars')
        setUpcomingWars(data.wars.upcomingWars)
        setPastWars(data.wars.pastWars)
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
}

export const getWar = async (id) => {
    try {
        const { data: { data: { war } } } = await axios.get(`/wars/${id}`)
        return war
    } catch (error) {
        console.log(error)
    }
}

export const endWar = async (id, result, goBack) => {
    try {
        await axios.put(`/wars/${id}`, { result })
        goBack()
    } catch (error) {
        console.log(error)
    }
}

export const saveGroups = async (id, groups) => {
    try {
        const groupsReducedData = groups.map(group => {
            const userIds = []
            const _id = group._id
            group.groupUsers.forEach(user => userIds.push(user._id))
            return { userIds, _id }
        })

        await axios.put(`/wars/${id}/groups`, { groups: groupsReducedData })
    } catch (error) {
        console.log(error)
    }
}