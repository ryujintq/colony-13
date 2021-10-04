import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../components/Button"
import DropDown from "../components/DropDown"
import { levelOptions, roleOptions, professionOptions, weaponOptions } from "../utils/CharacterInfoOptions"
import { updateCharacterInfo } from "../redux/actions/authActions"
import Message from "../components/Message"
import ListHeader from '../components/ListHeader'
import DropDownMulti from "../components/DropDownMulti"

const Character = () => {
    const { user, errorMessage } = useSelector(state => state.auth)
    const [showMessage, setShowMessage] = useState(false)
    const [level, setLevel] = useState(user.level)
    const [role, setRole] = useState(user.role)
    const [weaponPrimary, setWeaponPrimary] = useState(user.weaponPrimary)
    const [weaponSecondary, setWeaponSecondary] = useState(user.weaponSecondary)
    const [professions, setProfessions] = useState(user.professions)
    const dispatch = useDispatch()

    const handleRoleChange = e => {
        setRole(e.value)
    }

    const handleLevelChange = e => {
        setLevel(e.value)
    }

    const handleWeaponPrimaryChange = e => {
        setWeaponPrimary(e.value)
    }

    const handleWeaponSecondaryChange = e => {
        setWeaponSecondary(e.value)
    }

    const handleProfessionsChange = e => {
        const professionsArray = e.map(val => {
            return val.value
        })

        setProfessions(professionsArray)
    }

    const handleSaveClick = async () => {
        dispatch(updateCharacterInfo(user.username, { role, level, weaponPrimary, weaponSecondary, professions }, displaySaveMessage))
    }

    const displaySaveMessage = () => {
        setShowMessage(true)
    }

    return (
        <div className='mx-auto h-full flex flex-col max-w-xl overflow-y-auto'>
            <ListHeader text='Character Info' />
            {showMessage && <Message text='Character info saved successfully' status='success' />}
            {errorMessage && <Message text={errorMessage} status='error' />}
            <DropDown
                label='Role'
                value={role}
                options={roleOptions}
                onChange={handleRoleChange}
            />
            <DropDown
                label='Level'
                value={level}
                options={levelOptions()}
                onChange={handleLevelChange}
            />
            <DropDown
                label='Primary Weapon'
                value={weaponPrimary}
                options={weaponOptions}
                onChange={handleWeaponPrimaryChange}
            />
            <DropDown
                label='Secondary Weapon'
                value={weaponSecondary}
                options={weaponOptions}
                onChange={handleWeaponSecondaryChange}
            />
            <DropDownMulti
                label='Professions'
                values={[...professions]}
                options={professionOptions}
                onChange={handleProfessionsChange}
            />
            <Button
                text='Save'
                customStyle='mt-5'
                onClick={handleSaveClick}
            />
        </div>
    )
}

export default Character
