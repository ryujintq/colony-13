import bcrypt from 'bcrypt'

export const encryptPassword = async password => {
    const encrypted = await bcrypt.hash(password, 10)
    return encrypted
}

export const doPasswordsMatch = async (givenPassword, actualPassword) => {
    return bcrypt.compare(givenPassword, actualPassword)
}
