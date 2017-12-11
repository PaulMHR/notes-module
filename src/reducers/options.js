import {defaultFontSize, defaultBingeMode} from "../defaults";

const options = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FONT_SIZE':
            return {
                ...state,
                fontSize: action.fontSize
            };
        case 'RESET_FONT_SIZE':
            return {
                ...state,
                fontSize: defaultFontSize
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
        default:
            return state;
    }
};

export default options;