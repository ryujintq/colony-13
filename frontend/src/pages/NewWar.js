import { useState } from "react"
import { useHistory } from "react-router"
import { createNewWar } from "../api/apiCalls"
import Button from "../components/Button"
import DateTimePicker from "../components/DateTimePicker"
import DropDown from "../components/DropDown"
import ListHeader from "../components/ListHeader"
import Message from "../components/Message"
import { positionOptions, settlementOptions } from "../utils/WarOptions"


const NewWar = () => {
    const [settlement, setSettlement] = useState('')
    const [position, setPosition] = useState('')
    const [warDate, setWarDate] = useState(new Date());
    const [error, setError] = useState(false)
    const history = useHistory()

    const handleSettlementChange = e => {
        setSettlement(e.value)
    }

    const handlePositionChange = e => {
        setPosition(e.value)
    }

    const handleDateChange = date => {
        setWarDate(date)
    }

    const handleSave = async () => {
        if (!settlement || !position || !warDate) {
            return setError('please fill all fields')
        }

        const isPastDate = new Date(warDate) - new Date()

        if (isPastDate < 0) {
            return setError('Please choose a date in the future')
        }

        const goBack = () => history.goBack()
        await createNewWar(settlement, position, warDate, goBack)
    }

    const handleBackClick = () => {
        history.goBack()
    }

    return (
        <div className='px-5 mx-auto flex flex-col max-w-xl'>
            <p><i className="fas fa-arrow-left mt-5 text-2xl cursor-pointer" onClick={handleBackClick}></i></p>
            <ListHeader text='New War Details' />
            {error && <Message text={error} status='error' />}
            <DropDown
                label='Settlement'
                value={settlement}
                options={settlementOptions}
                onChange={handleSettlementChange}
            />
            <DropDown
                label='Position'
                value={position}
                options={positionOptions}
                onChange={handlePositionChange}
            />
            <DateTimePicker
                handleDateChange={handleDateChange}
                warDate={warDate}
            />
            <Button text='save' onClick={handleSave} />
        </div>
    )
}

export default NewWar
