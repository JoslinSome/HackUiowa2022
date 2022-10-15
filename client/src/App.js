import logo from './logo.svg'
import React, {useEffect} from 'react';
import './App.css';

import Navbar from "./Navbar";

function App() {

    useEffect(() => {
        document.title = "Ironmen Lab1"
    }, [])

    return (
        <Navbar/>
    );
}

export default App;
