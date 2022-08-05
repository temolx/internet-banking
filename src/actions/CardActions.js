export const AddCard = (type, color, number, expirationDate, cardType) => {
    return {
        type: 'ADD_CARD',
        payload: {
            type,
            color,
            number,
            expirationDate,
            cardType
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