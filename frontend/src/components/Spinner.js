const Spinner = ({ size, color }) => {
    return (
        <div className='flex flex-1 items-center justify-center my-5'>
            <i className={`fas fa-spinner fa-spin fa-${size}x text-${color}`}></i>
        </div>
    )
}

Spinner.defaultProps = {
    size: '3'
}

export default Spinner
