import './Menu.css';
import AddFeed from '../components/AddFeed';
import FeedCard from '../components/FeedCard';
import { useState } from 'react';

const Menu = ({ closeMenu }) => {
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

    const [addModal, setAddModal] = useState(false);

    const toggleAddModal = () => {
        setAddModal(!addModal);
    };

    const removeFeedClick = (feed) => {
        // console.log(0);
        // dispatch(removeFeeds(feed));
    };

    return (
        <div className='modal'>
            <div className='menu'>
                <div className='feed-list'>
                    <button
                        className='close-menu'
                        title='close'
                        onClick={closeMenu}
                    >
                        X
                    </button>
                    <div className='list-title'>
                        <h4>FEEDS</h4>
                        <div>Actions</div>
                    </div>
                    {addModal && <AddFeed closeModal={toggleAddModal} />}
                    <div className='list-feeds'>
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
                                            <button
                                                title={`Edit '${feed.title}'`}
                                            >
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
                    </div>
                </div>

                <div className='feed-buttons'>
                    <button
                        title='add feed'
                        className='edit-feeds'
                        onClick={toggleAddModal}
                    >
                        ➕
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;
