import { createSlice } from '@reduxjs/toolkit';

export const feedsReducer = createSlice({
    name: 'feeds',
    initialState: {
        active: [],
        muted: [],
    },
    reducers: {
        addFeeds: (state, action) => {
            if (state.active.length == 0) {
                return (state.active = [...action.payload]);
            } else {
                return (state.active = [...state.active, action.payload]);
            }
        },
        muteFeeds: (state) => {
            return state;
        },
        removeFeeds: (state, action) => {
            const tempState = [
                ...state.active.slice(0, action.payload),
                ...state.active.slice(action.payload + 1),
            ];
            return tempState;
        },
        updateFeeds: (state) => {
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addFeeds, removeFeeds } = feedsReducer.actions;

export default feedsReducer;
