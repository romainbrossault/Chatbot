const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

// Connexion à la base de données ///////////////////////////////////////
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données:", err);
        return;
    }
    console.log("Connecté à la base de données MySQL");
});

// Démarrer le serveur /////////////////////////////////////////////////
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

// Routes API //////////////////////////////////////////////////////////

// Route par défaut ////////////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("Serveur Express ");
});

// Route utilisateur ///////////////////////////////////////////////////
app.get("/utilisateur", (req, res) => {
    const query = "SELECT * FROM utilisateur";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Erreur lors de la récupération des utilisateurs:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json(results);
    });
});
