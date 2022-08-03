export const transfer = (account, recepient, amount, date, after) => {
    return {
        type: 'TRANSFER',
        payload: {
            account,
            recepient,
            amount,
            date,
            after
        }
    }
}