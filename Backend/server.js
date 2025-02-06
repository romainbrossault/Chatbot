import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import { pipeline } from "@xenova/transformers";

dotenv.config();
const app = express();
const PORT = 1000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MySQL //////////////////////////////////////////////////
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à MySQL:", err);
        return;
    }
    console.log("Connecté à MySQL");
});

// Chargement du modèle NLP ////////////////////////////////////////////
console.log("Chargement du modèle NLP...");
const nlp = await pipeline("sentiment-analysis");

// Routes API /////////////////////////////////////////////////////////

// Route de test
app.get("/", (req, res) => {
    res.send("Serveur Express opérationnel !");
});

// Route MySQL - Récupération des utilisateurs
app.get("/utilisateur", (req, res) => {
    const query = "SELECT * FROM utilisateur";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Erreur SQL:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json(results);
    });
});

// Route NLP - Analyse de sentiment
app.post("/analyze", async (req, res) => {
    try {
        const text = req.body.text;
        if (!text) return res.status(400).json({ error: "Texte manquant" });

        const result = await nlp(text);
        res.json(result);
    } catch (error) {
        console.error("Erreur NLP:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

// Démarrer le serveur /////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
