export const weaponOptions = [
    { value: 'Fire Staff', label: 'Fire Staff' },
    { value: 'Ice Gauntlet', label: 'Ice Gauntlet' },
    { value: 'Void Gauntlet', label: 'Void Gauntlet' },
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

export const professionOptions = [
    { value: 'Logging', label: 'Logging' },
    { value: 'Mining', label: 'Mining' },
    { value: 'Fishing', label: 'Fishing' },
    { value: 'Tracking & Skinning', label: 'Tracking & Skinning' },
    { value: 'Harvesting', label: 'Harvesting' },
    { value: 'Smelting', label: 'Smelting' },
    { value: 'Woodworking', label: 'Woodworking' },
    { value: 'Leatherworking', label: 'Leatherworking' },
    { value: 'Weaving', label: 'Weaving' },
    { value: 'Stone Cutting', label: 'Stone Cutting' },
]

export const levelOptions = () => {
    const levelArray = []

    for (let i = 1, iEnd = 60; i <= iEnd; i++) {
        levelArray.push({ value: i, label: i })
    }

    return levelArray
}
