const War = ({ war, onClick }) => {
    const gridColNum = war.result ? '4' : '3'
    const color = !war.result ? '' : war.result === 'Victory' ? 'blue' : 'red'
    const className = 'justify-self-center '

    return (
        <div className={`grid border-b grid-cols-${gridColNum} py-3 cursor-pointer bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-20`} onClick={onClick}>
            <p className={className + 'font-bold'}>{war.settlement}</p>
            <p className={className}>{war.position}</p>
            {war.result && <p className={className + `font-bold text-${color}-400`}>{war.result}</p>}
            <p className={className}>{war.date.toString().slice(0, 21)}</p>
        </div>
    )
}

export default War
