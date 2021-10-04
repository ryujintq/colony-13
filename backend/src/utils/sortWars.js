export const sortWarsAsc = (a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
}

export const sortWarsDesc = (a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export const sortGroups = (a, b) => {
    return new Date(a.groupId).getTime() - new Date(b.groupId).getTime()
}
