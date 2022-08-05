export const transfer = (account, recepient, amount, date, after, type) => {
    return {
        type: 'TRANSFER',
        payload: {
            account,
            recepient,
            amount,
            date,
            after,
            type
        }
    }
}