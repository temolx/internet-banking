export const AddCard = (type, color, number, expirationDate, cardType, account) => {
    return {
        type: 'ADD_CARD',
        payload: {
            type,
            color,
            number,
            expirationDate,
            cardType,
            account
        }
    }
}

export const RemoveCard = (number) => {
    return {
        type: 'REMOVE_CARD',
        payload: number
    }
}

// type: Visa / Mastercard
// cardType: Credit / Debit