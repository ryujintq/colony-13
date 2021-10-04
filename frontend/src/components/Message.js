const Message = ({ text, status }) => {
    const color = status === 'success' ? 'green' : 'red'

    return (
        <p className={`bg-${color}-600 mb-2 pl-2`}>{text}</p >
    )
}

export default Message
