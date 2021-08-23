const Button = ({ text, form, onClick }) => {
    return (
        <button className='w-full px-3 py-2 bg-green-800 text-white' form={form} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
