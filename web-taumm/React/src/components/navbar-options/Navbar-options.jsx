import React from 'react';
import { Link } from 'react-router';

import './Navbar-options.css';

function NavbarOptions(props) {
    return (
        <div>
            <ul className='nav-options-list'>
                {props.list.map(item => (
                    <li key = {item.categoria}>
                        <Link to = {item.path}>{item.categoria}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarOptions;