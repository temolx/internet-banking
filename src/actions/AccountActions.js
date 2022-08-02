export const addAccount = (name, deposit) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: {
            name, deposit
        }
    }
}