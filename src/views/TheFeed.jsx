import './TheFeed.css';
import FeedCard from '../components/FeedCard';
import { useSelector, useDispatch } from 'react-redux';
import { addFeeds, removeFeeds } from '../state/feeds/feedsReducer';

function TheFeed() {
    const currentFeeds = useSelector((state) => state.feeds.active);
    const dispatch = useDispatch();

    const dummyFeeds = [
        {
            title: 'feed 1',
            author: 'liar that lies',
            posts: 45,
            lastPost: '3am today',
            url: 'http://feed1.xyz',
            mute: false,
        },
        {
            title: 'feed 2',
            author: 'the entire province of Nova Scotia',
            posts: 3,
            lastPost: '234 days ago',
            url: 'http://feed2.xyz',
            mute: true,
        },
        {
            title: 'feed 3',
            author: 'a literal cat',
            lastPost: 'tomorrow somwhow',
            posts: 55,
            url: 'http://feed3.xyz',
            mute: false,
        },
    ];

    const newFeed = () => {
        const newFeedData = {
            title: 'feed 1',
            author: 'liar that lies',
            posts: 45,
            lastPost: '3am today',
            url: 'http://feed1.xyz',
            mute: false,
        };

        // dispatch(addFeeds(newFeedData));
    };

    const removeFeedClick = (feed) => {
        console.log(0);
        // dispatch(removeFeeds(feed));
    };

    return (
        <div className='the-feed'>
            <div className='feed-header'>
                <h2>The Feed</h2>
                <button
                    className='addFeed'
                    title='Add subscription'
                    onClick={newFeed}
                >
                    ➕
                </button>
            </div>
            {dummyFeeds.length == 0 ? (
                <>
                    <div>No Subscriptions Found!</div>
                    <br />
                    <button onClick={newFeed}>ADD</button>
                </>
            ) : (
                <>
                    {dummyFeeds.map((feed, index) => {
                        return (
                            <div className='feed' key={index}>
                                <FeedCard
                                    author={feed.author}
                                    updated={feed.lastPost}
                                    link={feed.url}
                                    title={feed.title}
                                    posts={feed.posts}
                                    muted={feed.mute}
                                />
                                <div className='actions'>
                                    <div>
                                        <button title={`Edit '${feed.title}'`}>
                                            ✏️
                                        </button>
                                        <button
                                            title={`Refresh '${feed.title}'`}
                                        >
                                            🔁
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            title={
                                                feed.mute
                                                    ? `Unmute '${feed.title}'`
                                                    : `Mute '${feed.title}'`
                                            }
                                            onClick={removeFeedClick(index)}
                                        >
                                            {feed.mute ? '🔔' : '🔕'}
                                        </button>
                                        <button
                                            title={`Unsubscribe from '${feed.title}'`}
                                            onClick={removeFeedClick(index)}
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default TheFeed;
