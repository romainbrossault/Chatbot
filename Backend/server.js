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

// Connexion à MySQL
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

// Chargement du modèle NLP
console.log("Chargement du modèle NLP...");
const nlp = await pipeline("sentiment-analysis");

// Routes API
app.get("/", (req, res) => {
    res.send("Serveur Express opérationnel !");
});

// Récupérer tous les utilisateurs
app.get("/utilisateurs", (req, res) => {
    db.query("SELECT * FROM utilisateur", (err, results) => {
        if (err) {
            console.error("Erreur SQL:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json(results);
    });
});

// Ajouter un utilisateur
app.post("/utilisateurs", (req, res) => {
    const { nom, prenom, email, role } = req.body;
    const query = "INSERT INTO utilisateur (nom, prenom, email, role, date_inscription) VALUES (?, ?, ?, ?, NOW())";
    db.query(query, [nom, prenom, email, role], (err, result) => {
        if (err) {
            console.error("Erreur SQL:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json({ id: result.insertId, nom, prenom, email, role });
    });
});

// Récupérer les questions
app.get("/questions", (req, res) => {
    db.query("SELECT * FROM question", (err, results) => {
        if (err) {
            console.error("Erreur SQL:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json(results);
    });
});

// Ajouter une question
app.post("/questions", (req, res) => {
    const { id_utilisateur, contenu } = req.body;
    const query = "INSERT INTO question (id_utilisateur, contenu, date_question) VALUES (?, ?, NOW())";
    db.query(query, [id_utilisateur, contenu], (err, result) => {
        if (err) {
            console.error("Erreur SQL:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json({ id: result.insertId, id_utilisateur, contenu });
    });
});

// Récupérer les réponses
app.get("/reponses", (req, res) => {
    db.query("SELECT * FROM reponse", (err, results) => {
        if (err) {
            console.error("Erreur SQL:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json(results);
    });
});

// Ajouter une réponse
app.post("/reponses", (req, res) => {
    const { id_question, id_connaissance, contenu, source } = req.body;
    const query = "INSERT INTO reponse (id_question, id_connaissance, contenu, source, date_reponse) VALUES (?, ?, ?, ?, NOW())";
    db.query(query, [id_question, id_connaissance, contenu, source], (err, result) => {
        if (err) {
            console.error("Erreur SQL:", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        res.json({ id: result.insertId, id_question, id_connaissance, contenu, source });
    });
});

// Analyser un message avec NLP
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

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
