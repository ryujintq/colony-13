import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import Select from "react-select"
import { endWar, saveGroups } from "../api/apiCalls"
import createDropDownObject from "../utils/createDropDownObject"
import { resultOptions } from "../utils/WarOptions"
import Button from "./Button"

const UpcomingWarBar = ({ id, isPassed, groups }) => {
    const [result, setResult] = useState()
    const { user } = useSelector(state => state.auth)
    const history = useHistory()

    const handleResultChange = e => {
        setResult(e.value)
    }

    const handleEndWarClick = () => {
        if (!result) {
            return
        }

        const goBack = () => history.goBack()
        endWar(id, result, goBack)
    }

    const handleGroupsSave = () => {
        saveGroups(id, groups)
    }

    return (
        <div>
            {!isPassed && user.isLeader && (
                <div className='flex justify-between items-center mt-5'>
                    <div>
                        <Button text='Save Groups' onClick={handleGroupsSave} />
                    </div>
                    <div className='flex'>
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

                </div>
            )}
        </div>

    )
}

export default UpcomingWarBar
