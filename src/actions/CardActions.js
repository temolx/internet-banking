export const AddCard = (type, color, number, expirationDate, cardType, accountName, accountDeposit) => {
    return {
        type: 'ADD_CARD',
        payload: {
            type,
            color,
            number,
            expirationDate,
            cardType,
            accountName,
            accountDeposit
        }
    }
}

export const RemoveCard = (number) => {
    return {
        type: 'REMOVE_CARD',
        payload: number
    }
}

export const subtractFromCard = (number, amount) => {
    return {
        type: 'SUBTRACT_FROM_CARD',
        payload: {
            number, amount
        }
    }
}

// type: Visa / Mastercard
// cardType: Credit / Debit