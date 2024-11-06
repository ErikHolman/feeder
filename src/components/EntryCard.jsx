import './EntryCard.css';

const EntryCard = (props) => {
    return (
        <>
            <a href={props.link} target='_blank'>
                {props.title}
            </a>
            <div>{props.author}</div>
            <div>Last Updated: {props.updated}</div>
        </>
    );
};

export default EntryCard;
