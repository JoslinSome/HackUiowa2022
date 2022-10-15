import logo from './logo.svg'
import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Feed from "./Feed";



function App() {

    useEffect(() => {
        document.title = "Ironmen Lab1"
    }, [])

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Feed/>}/>
               <Route path='graph'/>
            </Routes>
        </Router>

    );
}

export default App;
