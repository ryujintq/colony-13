const prefixKey = (key) => {
    return 'COL-13-' + key
}

export const localStorageGet = key => {
    return localStorage.getItem(prefixKey(key))
}

export const localStorageSet = (key, value) => {
    localStorage.setItem(prefixKey(key), value)
}

export const localStorageRemove = key => {
    localStorage.removeItem(prefixKey(key))
}
