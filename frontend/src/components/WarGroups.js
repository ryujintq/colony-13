import ListHeader from "./ListHeader"

const WarGroups = ({ war }) => {
    return (
        <div>
            <ListHeader text='Groups' />
            {war.groups.map((group, index) => (
                <p key={war._id}>Group {index + 1}</p>
            ))}
        </div>
    )
}

export default WarGroups
