import React from 'react';
import { Link } from 'react-router';

import './Navbar-options.css';

function NavbarOptions(props) {
    return (
        <div>
            <ul className='nav-options-list'>
                {props.list.map(producto => (
                    <li key = {producto.categoria}>
                        <Link to = {producto.path}>{producto.categoria}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarOptions;