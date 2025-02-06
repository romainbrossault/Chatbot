import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <div className='navbar'>
                    <Link to="/" className='nav-button'>Accueil</Link>
                    <Link to="/Chats" className='nav-button'>Mes Chats</Link>
                </div>
                <div className='login-button'>
                    <Link to="/Connexion" className='nav-button'>Connexion</Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;