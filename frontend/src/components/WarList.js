import { useHistory } from "react-router"
import ListHeader from "./ListHeader"
import Spinner from "./Spinner"
import WarElement from './WarElement'

const WarList = ({ loading, wars, warType }) => {
    const height = warType === 'Upcoming' ? '1/5' : '2/5'
    const message = warType === 'Upcoming' ? 'No upcoming wars' : 'No past wars'

    const history = useHistory()

    const handleOnClick = id => {
        history.push(`/war/${id}`)
    }

    return (
        <>
            <ListHeader text={`${warType} Wars`} />
            <div className={`h-${height} overflow-y-auto`}>
                {loading ? <Spinner /> : (
                    !wars.length ? message : (
                        wars.map(war => (
                            <WarElement war={war} onClick={handleOnClick} key={war._id} />
                        ))
                    )
                )}
            </div>
        </>
    )
}

export default WarList
