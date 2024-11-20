import { useSelector, useDispatch } from 'react-redux';
import { addFeeds } from './feedsReducer';

const Feeds = () => {
    const activeFeeds = useSelector((state) => state.feeds.active);
    const dispatch = useDispatch();

    const newFeed = () => {
        const newFeedData = {
            url: 'http://google.com',
            date: '11/19/24',
        };

        dispatch(addFeeds(newFeedData));
    };

    return (
        <div>
            {Object.keys(activeFeeds).length == 0 ? (
                <div style={{ color: 'white' }}>No Subscriptions Found</div>
            ) : (
                <div>
                    {activeFeeds.map((feed, index) => {
                        return (
                            <li style={{ color: 'white' }} key={index}>
                                {feed.url}
                            </li>
                        );
                    })}
                </div>
            )}
            <br />
            <button onClick={newFeed}>ADD</button>
        </div>
    );
};

export default Feeds;
