// ACTION
export const changePlatform = data => {
    return {
        type: 'PLATFORM',
        data,
    };
};

export const changeGenre = data => {
    return {
        type: 'GENRE',
        data,
    };
};

export const changeSortBy = data => {
    return {
        type: 'SORTBY',
        data,
    };
};
