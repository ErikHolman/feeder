// import { useState } from 'react';
import './App.css';
import AddFeed from './components/addFeed';
import RemoveFeed from './components/RemoveFeed';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <div>This will be the feed.</div>
            <AddFeed />
            <RemoveFeed />
        </>
    );
}

export default App;
