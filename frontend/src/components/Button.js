const Button = ({ text, form, onClick, style }) => {
    return (
        <button className={`w-full px-3 py-2 bg-green-800 text-white ${style}`} form={form} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
