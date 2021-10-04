import { Droppable } from "react-beautiful-dnd"
import ListHeader from "./ListHeader"
import User from "./User"

const WarMembers = ({ allUsers }) => {
    return (
        <div className='h-full flex flex-col w-60'>
            <ListHeader text='Members' />
            <Droppable droppableId="users">
                {(provided) => (
                    <div className='h-full overflow-auto mb-5' {...provided.droppableProps} ref={provided.innerRef}>
                        {allUsers.map((user, index) => {
                            if (user.role && user.weaponPrimary && user.weaponSecondary && user.level) {
                                return <User user={user} key={user._id} index={index} />

                            }
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default WarMembers
