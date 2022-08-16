const ProfileReducers = (state = '', action) => {
    switch(action.type) {
        case 'ADD_PICTURE':
            return state = action.payload;
        default:
            return state;
    }
}

export default ProfileReducers;