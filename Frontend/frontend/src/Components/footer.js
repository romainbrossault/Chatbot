import React from 'react';
import '../CSS/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} ChatBot. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;  