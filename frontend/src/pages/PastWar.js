import { useEffect, useState } from 'react'
import { getWar } from '../api/apiCalls'
import Spinner from '../components/Spinner'
import WarGroups from '../components/WarGroups'

const War = ({ match }) => {
    const [war, setWar] = useState()
    const [loading, setLoading] = useState(true)
    const id = match.params.id

    useEffect(() => {
        const getAllInfo = async () => {
            const warFromCall = await getWar(id)
            setWar(warFromCall)
            setLoading(false)
        }
        getAllInfo()
    }, [id])

    return (
        <div className='flex flex-col h-full '>
            {loading
                ? <Spinner />
                : <WarGroups isPassed={war.passed} groups={war.groups} />
            }
        </div>
    )
}

export default War
