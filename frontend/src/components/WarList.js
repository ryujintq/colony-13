import { useHistory } from "react-router"
import ListHeader from "./ListHeader"
import WarElement from './WarElement'

const WarList = ({ wars, warType }) => {
    const height = warType === 'Upcoming' ? '40' : '96'
    const message = warType === 'Upcoming' ? 'No upcoming wars' : 'No past wars'

    const history = useHistory()

    const handleOnClick = id => {
        history.push(`/war/${id}`)
    }

    return (
        <>
            <ListHeader text={`${warType} Wars`} />
            <div className={`max-h-${height} overflow-y-auto`}>
                {!wars.length ? message : (
                    wars.map(war => (
                        <WarElement war={war} onClick={() => handleOnClick(war._id)} key={war._id} />
                    ))
                )
                }
            </div>
        </>
    )
}

export default WarList
