export const AddPicture = (imgURL) => {
    return {
        type: 'ADD_PICTURE',
        payload: imgURL
    }
}

export const AddInfo = (data) => { // receiving object containing first name and last name
    return {
        type: 'ADD_INFO',
        payload: data
    }
}

export const AddName = (name) => { // receiving name only
    return {
        type: 'ADD_NAME',
        payload: name
    }
}