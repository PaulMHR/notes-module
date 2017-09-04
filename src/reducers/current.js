const current = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_COURSE':
            return {
                ...state,
                courseCode: action.courseCode
            };
        case 'SET_CURRENT_UNIT':
            return {
                ...state,
                unit: action.unit
            };
        default:
            return state;
    }
};

export default current;