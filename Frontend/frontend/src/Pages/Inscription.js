import React from "react";
import { Link } from "react-router-dom";
import "./styles/inscription.css";

export const Inscription = () => {
    return (
        <div className="inscription-container">
            <h2>Inscription</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Adresse Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="inscription-button">Créer un compte</button>
            </form>
            <p className="login-text">
                Vous avez déjà un compte? <Link to="/Connexion">Connectez-vous</Link>
            </p>
        </div>
    );
};

export default Inscription;