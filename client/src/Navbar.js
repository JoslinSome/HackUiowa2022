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

                <img className='logo' src={logo}/>

                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li>
                        <Link to='/' className='nav-links'>
                            <h2>Feed</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/friends' className='nav-links'>
                            <h2>Friends</h2>
                        </Link>
                        </li>
                    <li>
                        <Link to='/library' className='nav-links'>
                            <h2>Library</h2>
                        </Link>
                        </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;