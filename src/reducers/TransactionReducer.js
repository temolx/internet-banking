const TransactionReducer = (state = [], action) => {
    switch(action.type) {
        case 'TRANSFER':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default TransactionReducer;