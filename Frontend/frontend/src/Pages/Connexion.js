import React from "react";
import { Link } from "react-router-dom";
import "./styles/connexion.css"; // Assurez-vous d'avoir un fichier CSS pour les styles

export const Connexion = () => {
    return (
        <div className="connexion-container">
            <h2>Connexion</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="login">Login:</label>
                    <input type="text" id="login" name="login" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="connexion-button">Se connecter</button>
            </form>
            <p className="signup-text">
                Vous n'avez pas de compte? <Link to="/Inscription">Inscrivez-vous</Link>
            </p>
        </div>
    );
};

export default Connexion;