export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQDk7KsKi9nqwC1iCMNQJAdFgqWI-orVb4THA3_HqLVG-mF0vk_yVlwqdk5G6QE5NYupl9lxFjaxqLmKgUdbgCUXEyFOPo8SEpJY2624WLYUgcDNQIZKuhg_495BJ-UY3K-PtePxkWgwOLn0Etu3UJrXd3LGcQ27MRfV9cktvqa8GG9W",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
};

export default reducer;