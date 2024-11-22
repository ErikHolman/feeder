import './FeedCard.css';

const FeedCard = (props) => {
    return (
        <a
            className={props.muted ? 'feed-card muted' : 'feed-card'}
            title={`Feed for '${props.link}'`}
            href={props.link}
            target='_blank'
        >
            <div className='card-image'></div>
            <div className='card-content'>
                <div className='card-header'>
                    <div className='title'>{props.title}</div>
                    <div className='counter'>Posts: {props.posts}</div>
                </div>
                <div className='by-line'>
                    <div className='author'>{props.author}</div>
                    <div className='update'>Last Updated: {props.updated}</div>
                </div>
            </div>
        </a>
    );
};

export default FeedCard;
