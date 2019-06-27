export const loadState = () => {
    try {
        const getLocalStorageState = localStorage.getItem('beer')
        if (getLocalStorageState === null ) {
            return undefined
        }
        return JSON.parse(getLocalStorageState) 
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const SaveToLocalStorageState = JSON.stringify(state)
        localStorage.setItem('beer', SaveToLocalStorageState)

    } catch (error) {
        console.log(error)
    }
}