import Select from "react-select"

const DropDownMulti = ({ label, values, options, onChange }) => {
    //creates array objects to work with react-select
    const convertedValues = () => {
        return values.map(value => {
            return { value, label: `${value}` }
        })
    }

    return (
        <div className='flex flex-col mb-3 text-black'>
            <h3 className='text-white'>{label}:</h3>
            <Select
                // for placeholder to show, value must be null
                defaultValue={convertedValues()}
                options={options}
                onChange={onChange}
                placeholder={'Select...'}
                isMulti
            />
        </div>
    )
}

export default DropDownMulti
