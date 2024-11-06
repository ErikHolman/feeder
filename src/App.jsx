import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import TheFeed from './components/TheFeed';

function App() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='feeder'>
            <div className='header'>
                <div className='header-items'>
                    <h3>FEEDER</h3>
                    <button className='hamburger' onClick={toggleMenu}>
                        {menuVisible ? '✗' : '🍔'}
                    </button>
                </div>
            </div>
            <div className='content'>
                {menuVisible ? (
                    <>
                        <Menu />
                        <div className='blocker'></div>
                    </>
                ) : (
                    <TheFeed />
                )}
            </div>
        </div>
    );
}

export default App;
