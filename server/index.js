import cors from "cors";
import express from "express";
import farmsRouter from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de farms
app.use("/farm", farmsRouter);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});