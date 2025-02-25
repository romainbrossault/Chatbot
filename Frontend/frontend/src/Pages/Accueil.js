import React, { useState } from "react";
import "./styles/accueil.css";

export const Accueil = () => {
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState("");

    const handleSendMessage = () => {
        console.log("Message sent to chatbot:", message);
        
        setNotification("Requête envoyée avec succès !");
        
        setTimeout(() => {
            setNotification("");
        }, 3000);
    };

    return (
        <div className="container">
            <div className="textarea-container">
                <textarea
                    className="accueil-textarea"
                    placeholder="Posez votre question sur la cybersécurité"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <button onClick={handleSendMessage}>Envoyer au chatbot</button>
                {notification && <div className="notification">{notification}</div>}
            </div>
        </div>
    );
};

export default Accueil;