import React, { useState } from "react";
import "./styles/accueil.css";

export const Accueil = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        // Logic to send message to chatbot
        console.log("Message sent to chatbot:", message);
    };

    return (
        <div className="container">
            <div className="textarea-container">
                <textarea
                    placeholder="Posez votre question sur la cybersécurité"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <button onClick={handleSendMessage}>Envoyer au chatbot</button>
            </div>
        </div>
    );
};

export default Accueil;