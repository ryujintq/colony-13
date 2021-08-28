import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../components/Button"
import DropDown from "../components/DropDown"
import { levelOptions, roleOptions, weaponOptions } from "../utils/CharacterInfoOptions"
import { updateCharacterInfo } from "../redux/actions/authActions"

const Character = () => {
    const { user } = useSelector(state => state.auth)
    const [level, setLevel] = useState(user.level)
    const [role, setRole] = useState(user.role)
    const [weaponPrimary, setWeaponPrimary] = useState(user.weaponPrimary)
    const [weaponSecondary, setWeaponSecondary] = useState(user.weaponSecondary)
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

    const handleSaveClick = async () => {
        dispatch(updateCharacterInfo(user.username, { role, level, weaponPrimary, weaponSecondary }))
    }

    return (
        <div className='px-5 mx-auto flex flex-col w-full max-w-xl'>
            <h1 className='text-2xl my-5'>Character Info</h1>
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
            <Button
                text='Save'
                style='mt-5'
                onClick={handleSaveClick}
            />
        </div>
    )
}

export default Character
