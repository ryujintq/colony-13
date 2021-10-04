import { Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import User from './User'

const Group = ({ index, users, isPassed }) => {
    const { user } = useSelector(state => state.auth)
    const isDroppable = user.isLeader && !isPassed

    const innerContent = (
        <div className='flex flex-col h-full'>
            <p className=''>Group {index + 1}</p>
            <div className='bg-group min-h-100 opacity-90 pb-5 h-full border border-yellow-500'>
                {users.length
                    ? users.map((user, index) => (
                        <User
                            user={user}
                            index={index}
                            key={user._id}
                            isPassed={isPassed}
                        />
                    ))
                    : null
                }
            </div>
        </div>
    )

    const droppable = (
        <Droppable droppableId={`${index}`}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {innerContent}
                </div>
            )}
        </Droppable>
    )

    return isDroppable ? droppable : innerContent
}

export default Group
