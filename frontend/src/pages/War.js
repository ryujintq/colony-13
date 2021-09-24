import { useEffect, useState } from 'react'
import { getAllUsers, getWar } from '../api/apiCalls'
import EndWarBar from '../components/EndWarBar'
import Spinner from '../components/Spinner'
import WarGroups from '../components/WarGroups'
import WarMembers from '../components/WarMembers'

const War = ({ match }) => {
    const [war, setWar] = useState()
    const [allUsers, setAllUsers] = useState()
    const [loading, setLoading] = useState(true)
    const id = match.params.id

    useEffect(() => {
        const getAllInfo = async () => {
            await getWar(id, setWar)
            await getAllUsers(setAllUsers)
            setLoading(false)
        }
        getAllInfo()
    }, [])

    return (
        <div className='flex flex-col'>
            {loading ? <Spinner /> : (
                <>
                    <EndWarBar id={id} isPassed={war.passed} />
                    <WarGroups war={war} />
                    <WarMembers allUsers={allUsers} />
                </>
            )}
        </div>
    )
}

export default War
