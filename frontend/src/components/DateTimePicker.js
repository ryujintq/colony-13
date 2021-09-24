import { useRef } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const DateTimePicker = ({ warDate, handleDateChange, }) => {
    const dateTimeRef = useRef()

    const handleClick = () => {
        dateTimeRef.current.click()
    }

    return (
        <div className='flex flex-col'>
            <label>Date and Time:</label>
            <div>
                <input className='h-9 bg-white rounded text-black px-3 w-full' onClick={handleClick} value={warDate.toString()} type='text' placeholder='Select...' readOnly />
                <label className='opacity-0' ref={dateTimeRef}>
                    <DatePicker
                        selected={warDate}
                        onChange={handleDateChange}
                        showTimeSelect
                    />
                </label>
            </div>
        </div>

    )
}

export default DateTimePicker
