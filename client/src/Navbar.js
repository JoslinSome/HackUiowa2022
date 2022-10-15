import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import "./Navbar.css"
import logo from './logo.png';
function Navbar(props) {
    const [click,setClick] = useState(false);


    return (
        <div className='navbar'>
            <div className='navbar-container container'>

                <img src={logo}/>

                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li>
                        <Link to='/' className='nav-links'>
                            <h2>Home</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/graph' className='nav-links'>
                            Graphs
                        </Link><
                    /li>
                    <li>
                        <Link to='/graph' className='nav-links'>
                            Graphs
                        </Link><
                    /li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;