import express from "express"; // Framework pour le serveur node
import dotenv from "dotenv"; // Lit les variables d'environnement
import cookieParser from "cookie-parser"; // Lit les contenu des cookies
import cors from "cors";

import routes from "./routes/index.js"; // Précise où sont les routes

import { connectDB } from "./lib/db.js"; // Récupère la connexion à la base de données

dotenv.config(); // Indique que l'ont va utiliser .env

const PORT = process.env.PORT;

const app = express();

app.use(express.json()); // Indique que l'ont va pouvoir traduire le JSON et que l'ont va utiliser des cookies
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.DEPLOY_FRONT_URL, process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-type"],
    credentials: true,
  })
);

app.use("/", routes); // Chaque route localhost:3000 sera dirigé vers le dossier routes

app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
  connectDB();
});
