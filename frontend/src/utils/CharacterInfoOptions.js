export const weaponOptions = [
    { value: 'Fire Staff', label: 'Fire Staff' },
    { value: 'Healing Staff', label: 'Healing Staff' },
    { value: 'Sword and Shield', label: 'Sword and Shield' },
    { value: 'Rapier', label: 'Rapier' },
    { value: 'Spear', label: 'Spear' },
    { value: 'Bow', label: 'Bow' },
]

export const roleOptions = [
    { value: 'Tank', label: 'Tank' },
    { value: 'Damage Dealer', label: 'Damage Dealer' },
    { value: 'Healer', label: 'Healer' },
]

export const levelOptions = () => {
    const levelArray = []

    for (let i = 1, iEnd = 60; i <= iEnd; i++) {
        levelArray.push({ value: i, label: i })
    }

    return levelArray
}
