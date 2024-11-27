import { useState } from 'react';
import './App.css';
import Menu from './views/Menu';
import TheFeed from './views/TheFeed';

function App() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = (e) => {
        setMenuVisible(!menuVisible);
    };

    function closeMenu() {
        setMenuVisible(false);
    }

    return (
        <div className='feeder'>
            <div className='header'>
                <div className='header-items'>
                    <h3>FEEDER</h3>
                    <button
                        className='configuration'
                        title='Configure subscriptions'
                        onClick={toggleMenu}
                    >
                        ⚙️
                    </button>
                </div>
            </div>
            <div className='content'>
                {menuVisible && <Menu closeMenu={closeMenu} />}
                <TheFeed />
            </div>
        </div>
    );
}

export default App;
