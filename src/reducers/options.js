const options = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FONT_SIZE':
            console.log(action.fontSize);
            return {
                ...state,
                fontSize: action.fontSize
            };
        case 'RESET_FONT_SIZE':
            return {
                ...state,
                fontSize: 'LARGE'
            };
        default:
            return state;
    }
};

export default options;