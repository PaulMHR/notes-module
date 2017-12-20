const current = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_COURSE':
            return {
                ...state,
                courseCode: action.courseCode,
                unit: action.unit,
                onCourse: true
            };
        case 'SET_CURRENT_COURSE_UNITS':
            return {
                ...state,
                units: action.units
            };
        case 'SET_CURRENT_UNIT':
            return {
                ...state,
                unit: action.unit,
                onCourse: true
            };
        case 'RESET_CURRENT_COURSE_AND_UNIT':
            return {
                ...state,
                courseCode: null,
                unit: null,
                onCourse: false
            };
        default:
            return state;
    }
};

export default current;