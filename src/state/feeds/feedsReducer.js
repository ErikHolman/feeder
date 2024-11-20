import { createSlice } from '@reduxjs/toolkit';

export const feedsReducer = createSlice({
    name: 'feeds',
    initialState: {
        active: [],
        muted: [],
    },
    reducers: {
        addFeeds: (state, action) => {
            state.active = [...state.active, action.payload];
        },
        muteFeeds: (state) => {
            return state;
        },
        removeFeeds: (state) => {
            return state;
        },
        updateFeeds: (state) => {
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addFeeds, removeFeeds } = feedsReducer.actions;

export default feedsReducer;
