import './AddFeed.css';

const AddFeed = () => {
    return (
        <div className='addFeed'>
            <h3>Add a feed</h3>
            <form id='addFeed'>
                <input type='text' placeholder='Insert feed url...'></input>
                <button type='submit' disabled>
                    Add!
                </button>
            </form>
            <div className='cancelAdd'>X</div>
        </div>
    );
};

export default AddFeed;
