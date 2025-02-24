/* Importation des modules */
import { Route, Routes } from "react-router-dom";

/* Importation des pages */
import Accueil from "./Pages/Accueil";
import Chats from "./Pages/Chats";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";

/* Importation des composants */
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Chats" element={<Chats />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;