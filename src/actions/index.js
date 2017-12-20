export const setCurrentCourse = (courseCode) => ({
    type: 'SET_CURRENT_COURSE',
    courseCode,
    unit: "Introduction"
});

export const setCurrentCourseUnits = (units) => ({
    type: 'SET_CURRENT_COURSE_UNITS',
    units
});

export const setCurrentUnit = (unit) => ({
    type: 'SET_CURRENT_UNIT',
    unit
});

export const resetCurrentCourseAndUnit = () => ({
    type: 'RESET_CURRENT_COURSE_AND_UNIT'
});

export const setSearchTerm = (searchTerm) => ({
    type: 'SET_SEARCH_TERM',
    searchTerm
});

export const setFontSize = (fontSize) => ({
    type: 'SET_FONT_SIZE',
    fontSize
});

export const resetFontSize = () => ({
    type: 'RESET_FONT_SIZE'
});

export const setBingeMode = (bingeMode) => ({
    type: 'SET_BINGE_MODE',
    bingeMode
});

export const resetBingeMode = ({
    type: 'RESET_BINGE_MODE'
});
