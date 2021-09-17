const Message = ({ text, status }) => {
    const color = status === 'success' ? 'green' : 'red'

    return (
        <p className={`bg-${color}-500 mb-2`}>{text}</p >
    )
}

export default Message
