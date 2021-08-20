const checkUsernameValidity = username => {
    const regex = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/
    return regex.test(username)
}

export default checkUsernameValidity
