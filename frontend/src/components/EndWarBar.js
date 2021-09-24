import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import Select from "react-select"
import { endWar } from "../api/apiCalls"
import createDropDownObject from "../utils/createDropDownObject"
import { resultOptions } from "../utils/WarOptions"
import Button from "./Button"

const EndWarBar = ({ id, isPassed }) => {
    const [result, setResult] = useState()
    const { user } = useSelector(state => state.auth)
    const history = useHistory()

    const handleResultChange = e => {
        setResult(e.value)
    }

    const handleEndWarClick = () => {
        const goBack = () => history.goBack()
        endWar(id, result, goBack)
    }

    return (
        <div>
            {!isPassed && user.isLeader && (
                <div className='flex justify-end items-center mt-5'>
                    <div className='w-40 text-black'>
                        <Select
                            // for placeholder to show, value must be null
                            value={result ? createDropDownObject(result) : null}
                            options={resultOptions}
                            onChange={handleResultChange}
                            placeholder={'Select...'}
                        />
                    </div>
                    <div className='w-32 ml-5 '>
                        <Button text='End War' onClick={handleEndWarClick} />
                    </div>
                </div>
            )}
        </div>

    )
}

export default EndWarBar
