export const transfer = (account, recepient, amount, date) => {
    return {
        type: 'TRANSFER',
        payload: {
            account,
            recepient,
            amount,
            date
        }
    }
}