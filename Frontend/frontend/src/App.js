import { Route,Routes } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Accueil, Chats, Connexion } from "./Pages";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Chats" element={<Chats />} />
        <Route path="/Connexion" element={<Connexion />} />
      </Routes>
    </div>  
  );
}

export default App;
