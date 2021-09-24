const sortWars = (a, b, direction) => {
    if (direction === 'asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
}

export default sortWars