import healerIcon from '../assets/healer.png'
import damageDealerIcon from '../assets/damagedealer.png'
import tankIcon from '../assets/tank.png'
import { Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'

const User = ({ user, index, isPassed }) => {
    const { user: currentUser } = useSelector(state => state.auth)
    const isDraggable = currentUser.isLeader && !isPassed

    const color = user => {
        return user.role === 'Tank' ? 'blue' : user.role === 'Damage Dealer' ? 'red' : 'green'
    }

    const roleIcon = user.role === 'Tank' ? tankIcon : user.role === 'Damage Dealer' ? damageDealerIcon : healerIcon

    const innerContent = (
        <div className={`bg-${color(user)}-500 flex items-center p-2 text-black cursor-pointer border-b border-yellow-500`}>
            <img src={roleIcon} className='h-5 w-5' alt='role icon' />
            <div className='flex flex-col pl-2'>
                <p className={`font-semibold`}>{user.username}</p>
                <div className='flex'>
                    <p className={`border-black`}>{user.level}</p>
                    <p className='pl-2'>{user.weaponPrimary}, {user.weaponSecondary}</p>
                </div>
            </div>
        </div>
    )

    const draggable = (
        <Draggable draggableId={user._id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {innerContent}
                </div>
            )}
        </Draggable>
    )

    return isDraggable ? draggable : innerContent
}

export default User
