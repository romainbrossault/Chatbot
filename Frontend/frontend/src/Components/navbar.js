import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <div className='navbar'>
                    <Link to="/"><a className='nav-button'>Accueil</a></Link>
                    <Link to="/Chats"><a className='nav-button'>Mes Chats</a></Link>
                </div>
                <div className='login-button'>
                    <Link to="/Connexion"><a className='nav-button'>Connexion</a></Link>
                </div>
            </ul>
        </nav>
    );
};