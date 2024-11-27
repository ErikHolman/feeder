import './AddFeed.css';
import { useDispatch } from 'react-redux';
// import { addFeeds } from '../state/feeds/feedsReducer';

const AddFeed = ({ closeModal }) => {
    const dispatch = useDispatch();

    const createFeed = (event) => {
        event.preventDefault();
        console.log(`event`, event);
        // dispatch(addFeeds());
    };

    return (
        <div className='modal'>
            <div className='addFeed'>
                <button className='closeAdd' title='close' onClick={closeModal}>
                    X
                </button>
                <div className='addFormContent'>
                    <h3>Add a feed</h3>
                    <form id='addFeed'>
                        <label id='url'>RSS Feed Location</label>
                        <input
                            id='url'
                            type='text'
                            placeholder='Insert feed url...'
                            required
                        ></input>
                        <div className='modalButtons'>
                            <button
                                className='cancel'
                                type='cancel'
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className='submitForm'
                                type='submit'
                                onClick={createFeed}
                                disabled
                            >
                                Add!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFeed;
