import logo from './logo.svg'
import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Feed from "./Feed";
import FriendsPage from "./FriendsPage";
import Auth from "./Auth"
import "./components.css";


function App() {

    useEffect(() => {
        document.title = "SoundG8"
    }, [])

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/' element={<Feed/>}/>
               <Route path='friends' element={<FriendsPage/>}/>
                <Route path='graph'/>
            </Routes>
        </Router>

    );
}

export default App;
