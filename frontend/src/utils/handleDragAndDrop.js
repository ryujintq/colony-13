const handleDragAndDrop = (result, allUsers, setAllUsers, war, setGroups) => {
    const { destination, source } = result

    if (!destination) {
        return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return
    }

    //only moving in members list on the right
    if (source.droppableId === 'users' && destination.droppableId === 'users') {
        const usersArr = allUsers
        const [reorderedItem] = usersArr.splice(source.index, 1)
        usersArr.splice(destination.index, 0, reorderedItem)

        setAllUsers(usersArr)
        return
    }

    //from members list to group
    if (source.droppableId === 'users' && Number.isInteger(parseInt(destination.droppableId))) {
        const groupIndexFinish = destination.droppableId

        //if group already has 5 memberss
        if (war.groups[groupIndexFinish].groupUsers.length >= 5) {
            return
        }

        //remove from members list
        const usersArr = allUsers
        const [reorderedItem] = usersArr.splice(source.index, 1)
        setAllUsers(usersArr)

        //add to group
        const groupsArr = war.groups
        const groupUsers = groupsArr[groupIndexFinish].groupUsers
        groupUsers.splice(destination.index, 0, reorderedItem)
        setGroups(groupsArr)
        return
    }

    //from group to members list
    if (Number.isInteger(parseInt(source.droppableId)) && destination.droppableId === 'users') {
        const groupIndex = source.droppableId

        //remove from group
        const groupsArr = war.groups
        const [reorderedItem] = groupsArr[groupIndex].groupUsers.splice(source.index, 1)
        setGroups(groupsArr)

        //add to members list
        const usersArr = allUsers
        usersArr.splice(destination.index, 0, reorderedItem)
        setAllUsers(usersArr)
        return
    }

    //from group to group 
    if (Number.isInteger(parseInt(source.droppableId)) && Number.isInteger(parseInt(destination.droppableId))) {
        const groupIndexStart = source.droppableId
        const groupIndexFinish = destination.droppableId

        //if group already has 5 memberss
        if (war.groups[groupIndexFinish].groupUsers.length >= 5) {
            return
        }

        //remove from group
        const groupsArr = war.groups
        const [reorderedItem] = groupsArr[groupIndexStart].groupUsers.splice(source.index, 1)

        //add to another group
        const groupUsers = groupsArr[groupIndexFinish].groupUsers
        groupUsers.splice(destination.index, 0, reorderedItem)
        setGroups(groupsArr)
    }
}

export default handleDragAndDrop
