const Button = ({ text, form, onClick, customStyle }) => {
    return (
        <button className={`w-full px-3 py-2 bg-yellow-600 hover:bg-yellow-500 transition duration-200 ease-in-out ${customStyle} text-white`} form={form} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
