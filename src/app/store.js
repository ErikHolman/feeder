import { configureStore } from '@reduxjs/toolkit';
import feedsReducer from '../state/feeds/feedsReducer';

export default configureStore({
    reducer: {
        feeds: feedsReducer.reducer,
    },
});
