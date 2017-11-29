export const setCurrentCourse = (courseCode) => ({
    type: 'SET_CURRENT_COURSE',
    courseCode
});

export const setCurrentUnit = (unit) => ({
    type: 'SET_CURRENT_UNIT',
    unit
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