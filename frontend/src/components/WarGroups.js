import { useSelector } from "react-redux"
import Group from "./Group"
import ListHeader from "./ListHeader"

const WarGroups = ({ isPassed, groups }) => {
    const { user } = useSelector(state => state.auth)
    const gridClass = isPassed || (!isPassed && !user.isLeader)
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto pb-5'
        : 'grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto mb-5'

    return (
        <div className='h-full flex flex-col flex-1 overflow-x-hidden'>
            <ListHeader text='Groups' />
            <div className={gridClass}>
                {[...Array(10).keys()].map((x, index) => (
                    <Group index={index} key={index} users={groups[index].groupUsers} isPassed={isPassed} />
                ))}
            </div>
        </div>
    )
}

export default WarGroups
