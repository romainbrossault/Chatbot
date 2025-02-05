import React from 'react';

import {Link} from 'react-router-dom';

import '../CSS/navbar.css';

export const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <Link to="/"><a>Accueil</a></Link>

                <Link to="/Chats"><a>Mes Chats</a></Link>
            
                <Link to="/Connexion"><a>Connexion</a></Link>
            </ul>
        </nav>
    );
};