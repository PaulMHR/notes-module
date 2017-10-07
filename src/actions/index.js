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