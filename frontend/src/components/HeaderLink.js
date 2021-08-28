const HeaderLink = ({ iconClass, text, onClick }) => {
    return (
        <div className='text-white cursor-pointer ml-7 sm:ml-5 flex items-center' onClick={onClick}>
            <i className={iconClass}></i>
            <p className='hidden sm:block pl-1'>{text}</p>
        </div>
    )
}

export default HeaderLink
