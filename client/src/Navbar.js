import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import "./Navbar.css"
function Navbar(props) {
    const [click,setClick] = useState(false);


    return (
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                    <Icon icon="wi:thermometer" width='70' />
                    Thermally
                </Link>

                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li>
                        <Link to='/' className='nav-links'>
                            Home
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