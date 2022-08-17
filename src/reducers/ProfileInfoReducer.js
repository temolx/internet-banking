const ProfileInfoReducer = (state = {
    first: '',
    last: ''
}, action) => {
    switch(action.type) {
        case 'ADD_INFO':
            return state = action.payload; // object
        case 'ADD_NAME':
            return state = {
                first: action.payload === 'Elon' ? 'Daddy' : action.payload,
                last: ''
            }
        default:
            return state;
    }
}

export default ProfileInfoReducer;