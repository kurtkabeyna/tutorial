// ... (ваш импорт и код)

import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <Link to="/" className="logo-link">
                    <span className="logo">Artixx</span>
                </Link>
                <ul className="nav">
                    <Link to="/login" className="nav-item">
                        <li><PersonIcon /></li>
                    </Link>
                    <li className="nav-item"><MenuIcon /></li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    );
}
