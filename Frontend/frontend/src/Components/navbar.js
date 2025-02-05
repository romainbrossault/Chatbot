import React from 'react';

import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/Chats">Mes Chats</Link>
                </li>
                <li>
                    <Link to="/Connexion">Connexion</Link>
                </li>
            </ul>
        </nav>
    );
};