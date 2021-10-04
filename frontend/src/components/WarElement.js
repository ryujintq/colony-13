const War = ({ war, onClick }) => {
    const color = !war.result ? '' : war.result === 'Victory' ? 'blue' : 'red'
    const className = 'justify-self-center '
    const isPast = war.passed

    return (
        <div
            className={`grid border-b grid-cols-3 ${isPast === true ? 'sm:grid-cols-4' : ''} 
            py-3 cursor-pointer bg-black bg-opacity-50 hover:bg-yellow-500 hover:bg-opacity-20`}
            onClick={onClick}
        >
            <p className={className + 'font-bold'}>{war.settlement}</p>
            <p className={isPast === true ? `${className} hidden sm:block` : className}>{war.position}</p>
            {war.result && <p className={className + `font-bold text-${color}-400`}>{war.result}</p>}
            <p className={className}>{new Date(war.date).toString().slice(0, 21)}</p>
        </div>
    )
}

export default War
