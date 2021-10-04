import { useEffect, useState } from 'react'
import { getAllUsers, getWar } from '../api/apiCalls'
import UpcomingWarBar from '../components/UpcomingWarBar'
import Spinner from '../components/Spinner'
import WarGroups from '../components/WarGroups'
import WarMembers from '../components/WarMembers'
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import handleDragAndDrop from '../utils/handleDragAndDrop'

const War = ({ match }) => {
    const [war, setWar] = useState()
    const [allUsers, setAllUsers] = useState()
    const [loading, setLoading] = useState(true)
    const { user } = useSelector(state => state.auth)
    const id = match.params.id

    useEffect(() => {
        const getAllInfo = async () => {
            const warObj = await getWar(id)
            const usersArr = await getAllUsers()

            warObj.groups.forEach(groupObj => {
                groupObj.groupUsers.forEach(groupUser => {
                    const userIndex = usersArr.findIndex(usr => usr._id === groupUser._id)
                    usersArr.splice(userIndex, 1)
                })
            })

            setWar(warObj)
            setAllUsers(usersArr)
            setLoading(false)
        }
        getAllInfo()
    }, [id])

    const setGroups = (groupsArr) => {
        setWar(prevState => {
            return {
                ...prevState,
                groups: [...groupsArr]
            }
        })
    }

    const onDragEnd = result => {
        handleDragAndDrop(result, allUsers, setAllUsers, war, setGroups)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='flex flex-col mb-10 h-full'>
                {loading ? <Spinner /> : (
                    <>
                        <UpcomingWarBar id={id} isPassed={war.passed} groups={war.groups} />
                        <div className='flex gap-5 flex-1 h-full overflow-auto'>
                            <WarGroups isPassed={war.passed} groups={war.groups} />
                            {user.isLeader === true && <WarMembers allUsers={allUsers} />}
                        </div>
                    </>
                )}
            </div>
        </DragDropContext>
    )
}

export default War
