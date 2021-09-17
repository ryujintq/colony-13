import Select from 'react-select'

const DropDown = ({ label, value, options, onChange }) => {

    //creates object to work with react-select
    const createSelectValue = data => {
        return { value: `${data}`, label: `${data}` }
    }

    return (
        <div className='flex flex-col mb-3 text-black'>
            <h3 className='text-white'>{label}:</h3>
            <Select
                // for placeholder to show, value must be null
                value={value ? createSelectValue(value) : null}
                options={options}
                onChange={onChange}
                placeholder={'Select...'}
            />
        </div>
    )
}

export default DropDown
