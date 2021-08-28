import Select from 'react-select'

const DropDown = ({ label, value, options, onChange }) => {

    //creates object to work with react-select
    const createSelectValue = data => {
        return { value: `${data}`, label: `${data}` }
    }

    return (
        <div className='flex flex-col mb-3'>
            <h3>{label}:</h3>
            <Select
                value={createSelectValue(value)}
                options={options}
                onChange={onChange}
            />
        </div>
    )
}

export default DropDown
