import './AddFeed.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeeds } from '../state/feeds/feedsReducer';

const AddFeed = ({ closeModal }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        url: '',
    });
    const [formReady, setFormReady] = useState(false);
    const [feedLoad, setFeedLoad] = useState(false);

    /**
     * Evaluates if the form is ready for submission
     * @returns Boolean - sets formReady status
     */
    const isFormReady = () => {
        // Name AND url are empty - Empty form
        if (formData.url == '' && formData.name == '') {
            setFormReady(false);
            console.log('both blank', formReady);
            return;
        }

        // Name OR url is empty - Partially complete form
        if (
            (formData.url != '' && formData.name == '') ||
            (formData.url == '' && formData.name != '')
        ) {
            setFormReady(false);
            console.log('one blank', formReady);
            return;
        }

        // Name AND url are not empty - Complete form
        if (formData.url != '' && formData.name != '') {
            setFormReady(true);
            console.log('none blank', formReady);
            return;
        }
    };

    /**
     * Handles form entry for formData.url
     * @param {event}
     */
    const handleUrlChange = (event) => {
        if (event.target.value == '') {
            setFormData({ ...formData, url: event.target.value });
        } else {
            setFormData({ ...formData, url: event.target.value });
        }
        isFormReady();
    };

    /**
     * Handles form entry for formData.name
     * @param {event}
     */
    const handleNameChange = (event) => {
        if (event.target.value == '') {
            setFormData({ ...formData, name: event.target.value });
        } else {
            setFormData({ ...formData, name: event.target.value });
        }
        isFormReady();
    };

    /**
     * Handles adding the new feed to State
     * @param {event}
     */
    async function createFeed(event) {
        event.preventDefault();
        console.log('formData:', formData);

        try {
            dispatch(addFeeds(formData));
            setFeedLoad(true);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setFeedLoad(false);
                setFormData({
                    name: '',
                    url: '',
                });
            }, 2000);
        }
    }

    return (
        <div className='modal'>
            <div className='addFeed'>
                <button className='closeAdd' title='close' onClick={closeModal}>
                    X
                </button>
                <div className='addFormContent'>
                    <h3>Add an RSS Feed</h3>
                    <form id='addFeed'>
                        <label id='url'>Location on the Internet</label>
                        <input
                            htmlFor='url'
                            type='text'
                            placeholder='Insert feed url...'
                            name='feedURL'
                            value={formData.url}
                            onChange={handleUrlChange}
                            required
                            disabled={feedLoad}
                        ></input>
                        <label htmlFor='name'>Friendly Name</label>
                        <input
                            id='name'
                            type='text'
                            placeholder='Give it a familiar name...'
                            name='feedName'
                            value={formData.name}
                            onChange={handleNameChange}
                            required
                            disabled={feedLoad}
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
                                onClick={createFeed}
                                type='submit'
                                disabled={feedLoad || !formReady}
                            >
                                {feedLoad ? '📡' : 'Add!'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFeed;
