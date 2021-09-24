import { useEffect, useState } from 'react'
import WarList from '../components/WarList'
import { getAllWars } from '../api/apiCalls'
import Spinner from '../components/Spinner'
import WarStatsBar from '../components/WarStatsBar'

const Main = () => {
    const [loading, setLoading] = useState(true)
    const [upcomingWars, setUpcomingWars] = useState([])
    const [pastWars, setPastWars] = useState([])

    useEffect(() => {
        getAllWars(setUpcomingWars, setPastWars, setLoading)
    }, [])


    return (
        <div className='h-full flex flex-col w-full max-w-7xl mx-auto px-5'>
            {loading ? <Spinner /> : (
                <>
                    <WarStatsBar pastWars={pastWars} />
                    <WarList wars={upcomingWars} warType='Upcoming' />
                    <WarList wars={pastWars} warType='Past' />
                </>
            )}
        </div>
    )
}

export default Main
