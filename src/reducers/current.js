import {defaultBingeMode} from "../defaults";

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
                units: null,
                onCourse: false
            };
        case 'SET_BINGE_MODE':
            return {
                ...state,
                bingeMode: action.bingeMode
            };
        case 'RESET_BINGE_MODE':
            return {
                ...state,
                bingeMode: defaultBingeMode
            };
        case 'SET_DISPLAY_SIDEBAR':
            return {
                ...state,
                displaySidebar: action.displaySidebar
            };
        case 'RESET_DISPLAY_SIDEBAR':
            return {
                ...state,
                displaySidebar: !state.bingeMode && state.onCourse
            };
        default:
            return state;
    }
};

export default current;