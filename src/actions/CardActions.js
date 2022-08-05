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

// type: Visa / Mastercard
// cardType: Credit / Debit