import './TheFeed.css';
import AddFeed from '../components/AddFeed';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TheFeed() {
    const currentFeeds = useSelector((state) => state.feeds.active);
    const dispatch = useDispatch();

    const [addModal, setAddModal] = useState(false);

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
        </div>
    );
}

export default TheFeed;
