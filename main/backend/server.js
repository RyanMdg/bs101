import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { log } from "mercedlogger";
import mongoose from "mongoose";
import addFlashcards from "./router/addFlashcard.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Server testing

app.get("/", (req, res) => {
  res.send("SERVER IS WORKING");
});

// Add Flash Card
app.use("/flashcard", addFlashcards);

// * DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) =>
    app.listen(process.env.PORT, () =>
      log.green("SERVER STATUS", `Listening on port ${process.env.PORT}`)
    )
  );

mongoose.connection
  .on("open", () => log.green("DATABASE STATE", "DATABASE CONNECTED"))
  .on("close", () => log.magenta("DATABASE STATE", "CONNECTION OPEN"))
  .on("error", (error) => log.red("DATABASE STATE", error));
