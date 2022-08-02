const AccountReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return [...state, action.payload];
        case 'REMOVE_ACCOUNT':
            return state.filter(el => {
                return el !== action.payload
            })
        default:
            return state;
    }
}

export default AccountReducer;