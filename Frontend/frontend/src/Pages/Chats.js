import React, { useState } from "react";
import "./styles/chats.css";

export const Chats = () => {
   const [message, setMessage] = useState("");
   
       const handleSendMessage = () => {
           // Logic to send message to chatbot
           console.log("Message sent to chatbot:", message);
       };
   
       return (
           <div className="container">
               <div className="textarea-container">
                   <textarea
                       placeholder="Chat#1 Title"
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                   />
                   <div className="creation-date">Date de création : 07/02/25</div>
                   <div className="modify-date">Date de modification : 07/02/2025</div>
                   <br />
                    <button className='modify-button' onClick={handleSendMessage}>Modify</button>
                    <button className='delete-button' onClick={handleSendMessage}>Delete</button>
               </div>
           </div>
       );
   };

export default Chats;