export const addAccount = (name, deposit) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: {
            name, deposit
        }
    }
}

export const subtract = (name, amount) => {
    return {
        type: 'SUBTRACT',
        payload: {
            name: name, 
            amount: amount
        }
    }
}