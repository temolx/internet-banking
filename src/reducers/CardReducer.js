const CardReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CARD':
            return [...state, action.payload];
        case 'ADD_CREDIT_CARD':
            return [...state, action.payload];
        case 'REMOVE_CARD':
            return state.filter((el) => {
                return el.number !== action.payload;
            })
        case 'SUBTRACT_FROM_CARD':
            return state.map((el) => {
                if (el.number === action.payload.number) {
                    return {
                        ...el,
                        accountDeposit: el.accountDeposit - action.payload.amount
                    }
                }
                return el;
            })
        case 'ACCUMULATE_DEBT':
            return state.map((el) => {
                if (el.number === action.payload.number) {
                    return {
                        ...el,
                        debt: el.debt + action.payload.amount
                    }
                }
                return el;
            })
        default:
            return state;
    }
}

export default CardReducer;