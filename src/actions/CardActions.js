// is connected to some banking account.
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

// is NOT connected to any banking account, debt gets accumulated.
export const AddCreditCard = (type, color, number, expirationDate, cardType, debt) => {
    return {
        type: 'ADD_CREDIT_CARD',
        payload: {
            type,
            color,
            number,
            expirationDate,
            cardType,
            debt // credit card debt
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

export const accumulateDebt = (number, amount) => {
    return {
        type: 'ACCUMULATE_DEBT',
        payload: {
            number, amount
        }
    }
}

// type: Visa / Mastercard
// cardType: Credit / Debit