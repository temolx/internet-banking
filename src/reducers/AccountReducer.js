const AccountReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return [...state, action.payload];
        case 'REMOVE_ACCOUNT':
            return state.filter(el => {
                return el !== action.payload;
            })
        case 'SUBTRACT':
            return state.map((el) => {
                if (el.name === action.payload.name) {
                    return {...el, deposit: el.deposit - action.payload.amount}
                }
                return el;
            })
        default:
            return state;
    }
}

export default AccountReducer;