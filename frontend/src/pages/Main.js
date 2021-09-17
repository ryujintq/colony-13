import axios from '../api/axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import WarList from '../components/WarList'

const upcomingWarsTest = [
    { settlement: 'First Light', position: 'Attacking', passed: false, date: new Date() }
]

const pastWarsTest = [
    { settlement: 'Windsward', position: 'Defending', passed: true, result: 'Victory', date: new Date() },
    { settlement: 'First Light', position: 'Attacking', passed: true, result: 'Defeat', date: new Date() },
    { settlement: 'Windsward', position: 'Attacking', passed: true, result: 'Victory', date: new Date() },
    { settlement: 'First Light', position: 'Attacking', passed: true, result: 'Defeat', date: new Date() },
    { settlement: 'First Light', position: 'Attacking', passed: true, result: 'Defeat', date: new Date() },
]

const Main = () => {
    const [loading, setLoading] = useState(false)
    const [upcomingWars, setUpcomingWars] = useState(upcomingWarsTest)
    const [pastWars, setPastWars] = useState(pastWarsTest)
    const { isLeader } = useSelector(state => state.auth.user)

    // useEffect(() => {
    //     const getAllWars = async () => {
    //         const { data: { data } } = await axios.get('/wars')
    //         setUpcomingWars(data.wars.upcomingWars)
    //         setPastWars(data.wars.pastWars)
    //         setLoading(false)
    //     }
    //     getAllWars()
    // }, [])

    const totalWins = pastWars.filter(war => war.result === 'Victory').length

    return (
        <div className='h-full flex flex-col w-full max-w-7xl mx-auto px-5'>
            <div className='mt-5 flex justify-between flex-col sm:flex-row items-center'>
                <div className='flex'>
                    <p className='mr-5'>Total Wars: {pastWars.length}</p>
                    <p className='mr-5'>Total Wins: {totalWins}</p>
                    <p className='mr-5'>Total Losses: {pastWars.length - totalWins}</p>
                    <p className='mr-5'>Win Ratio: {(totalWins / pastWars.length).toFixed(2)}</p>
                </div>
                {isLeader && (
                    <div className='w-32 sm:mt-0'>
                        <Button text='Start new war' />
                    </div>
                )}
            </div>
            <WarList loading={loading} wars={upcomingWars} warType='Upcoming' />
            <WarList loading={loading} wars={pastWars} warType='Past' />
        </div>
    )
}

export default Main
