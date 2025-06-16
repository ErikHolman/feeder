import './TheFeed.css';
import AddFeed from '../components/AddFeed';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FeedCard from '../components/FeedCard';

function TheFeed() {
    const currentFeeds = useSelector((state) => state.feeds.active);

    const [addModal, setAddModal] = useState(false);

    /**
     * Toggles Add Modal visibility
     * @default False
     */
    const toggleAddModal = () => {
        setAddModal(!addModal);
    };

    return (
        <div className='the-feed'>
            <div className='feed-header'>
                <h2>The Feed</h2>
                <button
                    className='addFeedButton'
                    title='Add subscription'
                    onClick={toggleAddModal}
                >
                    ➕
                </button>
            </div>
            {addModal && <AddFeed closeModal={toggleAddModal} />}
            {currentFeeds.length == 0 && (
                <div className='no-feeds'>
                    <h3>😱 No Subscriptions Found 😱</h3>
                    <button
                        className='addFeedButton'
                        title='Add subscription'
                        onClick={toggleAddModal}
                    >
                        ➕
                    </button>
                </div>
            )}
            {currentFeeds.length > 0 &&
                currentFeeds.map((index, feed) => {
                    console.log(index, feed);
                    <FeedCard feed={feed} />;
                })}
            {JSON.stringify(currentFeeds)}
        </div>
    );
}

export default TheFeed;
