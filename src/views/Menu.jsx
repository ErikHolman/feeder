import './Menu.css';

const Menu = () => {
    let feeds = [
        { title: 'feed 1', posts: 45, url: 'http://feed1.xyz', mute: false },
        { title: 'feed 2', posts: 3, url: 'http://feed2.xyz', mute: true },
        { title: 'feed 3', posts: 55, url: 'http://feed3.xyz', mute: false },
    ];

    return (
        <div className='menu'>
            <div className='feed-list'>
                <div className='list-title'>
                    <div className='list-left'>
                        <h4>FEEDS</h4>
                    </div>
                    <div>Actions</div>
                </div>
                <div className='list-feeds'>
                    {feeds.map((feed, index) => {
                        return (
                            <div
                                className={feed.mute ? 'feed muted' : 'feed'}
                                key={index}
                            >
                                <div className='feed-left'>
                                    <a href={feed.url}>
                                        <div className='title'>
                                            {feed.title} -{' '}
                                            <span className='count'>
                                                <em>{feed.posts}</em>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className='feed-right'>
                                    <button title='edit feed'>✏️</button>
                                    <button title='refresh feed'>🔁</button>
                                    <button
                                        title={
                                            feed.mute
                                                ? `unmute ${feed.title}`
                                                : `mute ${feed.title}`
                                        }
                                    >
                                        {feed.mute ? '🔔' : '🔕'}
                                    </button>
                                    <button title='kill feed'>🗑️</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='feed-buttons'>
                <button title='add feed' className='edit-feeds'>
                    ➕
                </button>
            </div>
        </div>
    );
};

export default Menu;
