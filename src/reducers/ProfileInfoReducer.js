const ProfileInfoReducer = (state = '', action) => {
    switch(action.type) {
        case 'ADD_INFO':
            return state = action.payload; // object
        default:
            return state;
    }
}

export default ProfileInfoReducer;