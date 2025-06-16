import { createSlice } from '@reduxjs/toolkit';

export const feedsReducer = createSlice({
    name: 'feeds',
    initialState: {
        active: [],
        muted: [],
    },
    reducers: {
        /**
         * Adds element to State
         * @param {Object} state
         * @param {*} action
         * @returns Mutated State
         */
        addFeeds: (state, action) => {
            state.active.push({ url: action.payload });
            return state;
        },

        /**
         * Modifies element to/from 'Mute' status
         * @param {Object} state
         * @param {*} action
         * @returns Mutated State
         */
        muteFeeds: (state) => {
            return state;
        },

        /**
         * Removes element from State
         * @param {Object} state
         * @param {*} action
         * @returns Mutated State
         */
        removeFeeds: (state, action) => {
            const tempState = [
                ...state.active.slice(0, action.payload),
                ...state.active.slice(action.payload + 1),
            ];
            return tempState;
        },

        /**
         * Updates element in State
         * @param {Object} state
         * @param {*} action
         * @returns Mutated State
         */
        updateFeeds: (state) => {
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addFeeds } = feedsReducer.actions;

export default feedsReducer;
