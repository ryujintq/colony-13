import { useEffect, useState } from 'react'
import { getWar } from '../api/apiCalls'
import EndWarBar from '../components/EndWarBar'
import Spinner from '../components/Spinner'
import WarGroups from '../components/WarGroups'

const War = ({ match }) => {
    const [war, setWar] = useState()
    const [loading, setLoading] = useState(true)
    const id = match.params.id

    useEffect(() => {
        const getAllInfo = async () => {
            await getWar(id, setWar)
            setLoading(false)
        }
        getAllInfo()
    }, [id])

    return (
        <div className='flex flex-col'>
            {loading ? <Spinner /> : (
                <>
                    <EndWarBar id={id} isPassed={war.passed} />
                    <WarGroups war={war} />
                </>
            )}
        </div>
    )
}

export default War
