export const defaultFontSize = 'LARGE';
export const defaultBingeMode = false;
export const defaultOnCourse = false;

const defaultOptions = {
    options: {
        fontSize: defaultFontSize,
        bingeMode: defaultBingeMode,
        onCourse: defaultOnCourse,
        displaySidebar: !defaultBingeMode && defaultOnCourse
    }
};

export default defaultOptions;