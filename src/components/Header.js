import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
    return (
        <header>

            <div>
                <span className='logo'>Artixx</span>
                <profile><PersonIcon /></profile>
                <ul className='nav'>
                    <li>Аккаунт</li>
                    <li>Меню</li>
                    <li>Статьи</li>
                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}
