import ListHeader from "./ListHeader"

const WarMembers = ({ allUsers }) => {
    const color = user => {
        return user.role === 'Tank' ? 'blue' : user.role === 'Damage Dealer' ? 'red' : 'green'
    }
    return (
        <div>
            <ListHeader text='Members' />
            {allUsers.map(user => (
                <p key={user._id} className={`bg-${color(user)}-400 pl-1 text-lg font-semibold text-black`}>{user.username}</p>
            ))}
        </div>
    )
}

export default WarMembers
