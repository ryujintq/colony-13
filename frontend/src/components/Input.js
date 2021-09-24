const Input = ({ value, onChange, text, type, name }) => {
    return (
        <input
            className='w-full bg-gray-100 p-2 my-2'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={text}
            type={type}
        />
    )
}

Input.defaultProps = {
    type: 'text'
}

export default Input
