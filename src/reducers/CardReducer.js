const CardReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CARD':
            return [...state, action.payload];
        case 'REMOVE_CARD':
            return state.filter((el) => {
                return el.number !== action.payload;
            })
        default:
            return state;
    }
}

export default CardReducer;