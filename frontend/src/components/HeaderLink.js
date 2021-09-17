const HeaderLink = ({ iconClass, text, onClick }) => {
    return (
        <div className='cursor-pointer ml-7 flex items-center' onClick={onClick}>
            <i className={iconClass}></i>
            <p className='hidden sm:block pl-1'>{text}</p>
        </div>
    )
}

export default HeaderLink
