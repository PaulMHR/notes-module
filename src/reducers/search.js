const search = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return {
                searchTerm: action.searchTerm
            };
        default:
            return state;
    }
};

export default search;