import { Route,Routes } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Accueil } from "./Pages/Accueil";
import { Chats } from "./Pages/Chats";
import { Connexion } from "./Pages/Connexion";

import "./CSS/navbar.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path=".Accueil/" element={<Accueil />} />
        <Route path="/Chats" element={<Chats />} />
        <Route path="/Connexion" element={<Connexion />} />
      </Routes>
    </div>  
  );
}

export default App;
