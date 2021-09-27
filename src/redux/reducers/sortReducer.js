// REDUCER
const sortReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLATFORM':
            return {
                ...state,
                platform: action.data,
            };
        case 'GENRE':
            return {
                ...state,
                genre: action.data,
            };
        case 'SORTBY':
            return {
                ...state,
                sortby: action.data,
            };
        case 'CLEAR_SORT':
            return {};
        default:
            return state;
    }
};

export default sortReducer;
