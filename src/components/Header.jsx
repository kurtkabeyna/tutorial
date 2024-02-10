import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
    return (
        <header>
            <div>
                <span className='logo'>Artixx</span>
                <ul className='nav'>
                    <li><PersonIcon /></li>
                    <li><MenuIcon /></li>

                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    );
}
